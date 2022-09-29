import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { hash } from '../utils/hash'

interface IPasswordContext {
    password: string
    loadPassword: () => Promise<void>
    deletePassword: () => Promise<void>
    mutatePassword: (password: string) => Promise<void>
}

export const PasswordContext = createContext<IPasswordContext>({} as IPasswordContext)

export const PasswordProvider: FC = ({ children }) => {
    const [password, setPassword] = useState<string>()
    
    async function loadPassword() {
        const password = await AsyncStorage.getItem('@secrets:password')
        
        if (password) {
            AsyncStorage.setItem('@secrets:password', password)
            
            setPassword(password)
        } else {
            setPassword(null)
        }
    }

    async function mutatePassword(password: string) {
        const hashPassword = await hash(password)
        
        AsyncStorage.setItem('@secrets:password', hashPassword)

        setPassword(hashPassword)
    }

    async function deletePassword() {
        AsyncStorage.removeItem('@secrets:password').then(() => setPassword(null))
    }

    useEffect(() => {
        loadPassword().then()
    }, [])
    
    return (
        <PasswordContext.Provider value={{password, loadPassword, mutatePassword, deletePassword}}>
           {children}
        </PasswordContext.Provider>
    )
}

export function usePassword() {
    return useContext(PasswordContext)
}

export default usePassword