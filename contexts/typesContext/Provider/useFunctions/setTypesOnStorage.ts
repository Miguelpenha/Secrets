import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function setTypesOnStorage(types: string[], setTypes: Dispatch<SetStateAction<string[]>>) {
    await AsyncStorage.setItem('@secrets:types', types.toString())

    setTypes(types)
}

export default setTypesOnStorage