import { ISecurity } from '../../types'
import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import defaultSecurityConfiguration from './defaultSecurityConfiguration'

interface ISecurityConfigurationContext {
    securityConfiguration: ISecurity
    loadSecurityConfiguration: () => Promise<void>
    setSecurityConfiguration: (securityConfiguration: ISecurity) => Promise<void>
}

export const SecurityConfigurationContext = createContext<ISecurityConfigurationContext>({} as ISecurityConfigurationContext)

export const SecurityConfigurationProvider: FC = ({ children }) => {
    const [securityConfiguration, setSecurityConfiguration] = useState<ISecurity>(defaultSecurityConfiguration)

    async function setSecurityConfigurationOnStorage(securityConfiguration: ISecurity) {
        AsyncStorage.setItem('@secrets:securityConfiguration', JSON.stringify(securityConfiguration))

        setSecurityConfiguration(securityConfiguration)
    }
    
    async function loadSecurityConfiguration() {
        const securityConfigurationRaw = await AsyncStorage.getItem('@secrets:securityConfiguration')
        
        if (!securityConfigurationRaw) {
            setSecurityConfigurationOnStorage(defaultSecurityConfiguration)
        } else {
            setSecurityConfigurationOnStorage(securityConfiguration)
        }
    }

    useEffect(() => {
        loadSecurityConfiguration().then()
    }, [])
    
    return (
        <SecurityConfigurationContext.Provider value={{securityConfiguration, setSecurityConfiguration: setSecurityConfigurationOnStorage, loadSecurityConfiguration}}>
           {children}
        </SecurityConfigurationContext.Provider>
    )
}

export function useSecurityConfiguration() {
    return useContext(SecurityConfigurationContext)
}

export default useSecurityConfiguration