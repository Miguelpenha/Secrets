import { FC, useState, useEffect } from 'react'
import useFunctions from './useFunctions'
import TypesContext from '../Context'

const TypesProvider: FC = ({ children }) => {
    const [types, setTypes] = useState<string[]>([])
    const { loadTypes, setTypesOnStorage } = useFunctions(setTypes)

    useEffect(() => {
        setTypesOnStorage(types).then()
    }, [types])

    useEffect(() => {
        loadTypes().then()
    }, [])
    
    return (
        <TypesContext.Provider value={{types, setTypes}}>
           {children}
        </TypesContext.Provider>
    )
}

export default TypesProvider