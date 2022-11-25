import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ITypesContext {
    types: string[]
    loadTypes: () => Promise<void>
    setTypes: (types: string[]) => Promise<void>
}

export const TypesContext = createContext<ITypesContext>({} as ITypesContext)

export const TypesProvider: FC = ({ children }) => {
    const [types, setTypes] = useState<string[]>([])

    async function setTypesOnStorage(types: string[]) {
        await AsyncStorage.setItem('@secrets:types', types.toString())

        setTypes(types)
    }
    
    async function loadTypes() {
        const typesRaw = await AsyncStorage.getItem('@secrets:types')
        const types = typesRaw.split(',')
        
        if (types) {
            setTypesOnStorage(types)
        } else {
            setTypesOnStorage([])
        }
    }

    useEffect(() => {
        loadTypes().then()
    }, [])
    
    return (
        <TypesContext.Provider value={{types, setTypes: setTypesOnStorage, loadTypes}}>
           {children}
        </TypesContext.Provider>
    )
}

export function useTypes() {
    return useContext(TypesContext)
}

export default useTypes