import { Dispatch, SetStateAction } from 'react'
import loadTypes from './loadTypes'
import setTypesOnStorage from './setTypesOnStorage'

function useFunctions(setTypes: Dispatch<SetStateAction<string[]>>) {
    return {
        loadTypes: () => loadTypes(setTypes),
        setTypesOnStorage: (types: string[]) => setTypesOnStorage(types, setTypes)
    }
}

export default useFunctions