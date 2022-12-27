import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function loadTypes(setTypes: Dispatch<SetStateAction<string[]>>) {
    const types = await AsyncStorage.getItem('@secrets:types')

    types && setTypes(types.split(','))
}

export default loadTypes