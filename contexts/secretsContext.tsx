import { ISecret } from '../types'
import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ISecretsContext {
    secrets: ISecret[]
    loadSecrets: () => Promise<void>
    deleteSecret: (id: string) => Promise<void>
    createSecret: (secret: ISecret) => Promise<void>
    setSecrets: (secrets: ISecret[]) => Promise<void>
}

export const SecretsContext = createContext<ISecretsContext>({} as ISecretsContext)

export const SecretsProvider: FC = ({ children }) => {
    const [secrets, setSecrets] = useState<ISecret[]>([])
    
    async function loadSecrets() {
        const secrets: ISecret[] = JSON.parse(await AsyncStorage.getItem('@secrets:secrets'))
        
        if (secrets) {
            setSecretsOnStorage(secrets)
        } else {
            setSecrets([])
        }
    }

    async function setSecretsOnStorage(secrets: ISecret[]) {
        AsyncStorage.setItem('@secrets:secrets', JSON.stringify(secrets))

        setSecrets(secrets)
    }

    async function createSecret(secret: ISecret) {
        const secrets: ISecret[] = JSON.parse(await AsyncStorage.getItem('@secrets:secrets')) || []

        secrets.push(secret)

        AsyncStorage.setItem('@secrets:secrets', JSON.stringify(secrets))

        setSecrets(secrets)
    }

    async function deleteSecret(idDelete: string) {
        const secrets: ISecret[] = JSON.parse(await AsyncStorage.getItem('@secrets:secrets'))
        const secretsNew: ISecret[] = []

        secrets.map(secret => {
            if (secret.id !== idDelete) {
                secretsNew.push(secret)
            }
        })

        AsyncStorage.setItem('@secrets:secrets', JSON.stringify(secretsNew))

        setSecrets(secretsNew)
    }

    useEffect(() => {
        loadSecrets().then()
    }, [])
    
    return (
        <SecretsContext.Provider value={{secrets, setSecrets: setSecretsOnStorage, loadSecrets, createSecret, deleteSecret}}>
           {children}
        </SecretsContext.Provider>
    )
}

export function useSecrets() {
    return useContext(SecretsContext)
}

export function useSecret(id: string) {
    const { secrets } = useContext(SecretsContext)
    const [secret, setSecret] = useState<ISecret>()
    
    useEffect(() => {
        secrets.map(secretMap => id === secretMap.id && setSecret(secretMap))
    }, [secrets])
    
    return secret
}


export default useSecrets