import { ISecret } from '../types'
import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { decrypt, encrypt } from '../utils/encrypt'
import usePassword from './passwordContext'

interface ISecretsContext {
    secrets: ISecret[]
    loadSecrets: () => Promise<void>
    editSecret: (secretEdit: ISecret) => Promise<void>
    deleteSecret: (id: string) => Promise<void>
    createSecret: (secret: ISecret) => Promise<void>
    setSecrets: (secrets: ISecret[]) => Promise<void>
}

interface ISecretsContextNotPassword {
    loadSecrets: () => Promise<void>
}

export const SecretsContext = createContext<ISecretsContext>({} as ISecretsContext)
export const SecretsContextNotPassword = createContext<ISecretsContextNotPassword>({} as ISecretsContextNotPassword)

export const SecretsProvider: FC = ({ children }) => {
    const [secrets, setSecrets] = useState<ISecret[]>([])
    const { password } = usePassword()
    
    async function loadSecrets() {
        try {
            const secrets: ISecret[] = JSON.parse(decrypt(await AsyncStorage.getItem('@secrets:secrets'), password))
        
            if (secrets) {
                setSecretsOnStorage(secrets)
            } else {
                setSecrets([])
            }
        } catch {
            setSecrets([])
        }
    }

    async function setSecretsOnStorage(secrets: ISecret[]) {
        AsyncStorage.setItem('@secrets:secrets', encrypt(JSON.stringify(secrets), password))

        setSecrets(secrets)
    }

    async function createSecret(secret: ISecret) {
        const secretsRow = await AsyncStorage.getItem('@secrets:secrets')
        const secrets: ISecret[] = secretsRow ? JSON.parse(decrypt(secretsRow, password)) : []

        secrets.push(secret)

        AsyncStorage.setItem('@secrets:secrets', encrypt(JSON.stringify(secrets), password))

        setSecrets(secrets)
    }

    async function deleteSecret(idDelete: string) {
        const secrets: ISecret[] = JSON.parse(decrypt(await AsyncStorage.getItem('@secrets:secrets'), password))
        const secretsNew: ISecret[] = []

        secrets.map(secret => {
            if (secret.id !== idDelete) {
                secretsNew.push(secret)
            }
        })

        AsyncStorage.setItem('@secrets:secrets', encrypt(JSON.stringify(secretsNew), password))

        setSecrets(secretsNew)
    }

    async function editSecret(secretEdit: ISecret) {
        let secretsRaw: ISecret[] = JSON.parse(decrypt(await AsyncStorage.getItem('@secrets:secrets'), password))

        const secrets = secretsRaw.map(secret => {
            if (secret.id === secretEdit.id) {
                return { ...secret, ...secretEdit } 
            } else {
                return secret
            }
        })

        AsyncStorage.setItem('@secrets:secrets', encrypt(JSON.stringify(secrets), password))

        setSecrets(secrets)
    }

    useEffect(() => {
        password && loadSecrets().then()
    }, [])

    if (password) {
        return (
            <SecretsContext.Provider value={{secrets, setSecrets: setSecretsOnStorage, loadSecrets, createSecret, deleteSecret, editSecret}}>
               {children}
            </SecretsContext.Provider>
        )
    } else {
        return (
            <SecretsContextNotPassword.Provider value={{loadSecrets}}>
                {children}
            </SecretsContextNotPassword.Provider>
        )
    }
}

export function useSecrets(): ISecretsContext {
    const { password } = usePassword()

    return useContext(password ? SecretsContext : SecretsContextNotPassword) as ISecretsContext
}

export function useSecret(id: string) {
    const { secrets } = useContext(SecretsContext)
    const [secret, setSecret] = useState<ISecret>()
    
    useEffect(() => {
        secrets && secrets.map(secretMap => id === secretMap.id && setSecret(secretMap))
    }, [secrets])
    
    return secret
}


export default useSecrets