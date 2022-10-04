import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IHideSecretOnShowContext {
    hideSecretOnShow: boolean
    loadHideSecretOnShow: () => Promise<void>
    setHideSecretOnShow: (hideSecretOnShow: boolean) => Promise<void>
}

export const HideSecretOnShowContext = createContext<IHideSecretOnShowContext>({} as IHideSecretOnShowContext)

export const HideSecretOnShowProvider: FC = ({ children }) => {
    const [hideSecretOnShow, setHideSecretOnShow] = useState(false)

    async function setHideSecretOnShowOnStorage(hideSecretOnShow: boolean) {
        await AsyncStorage.setItem('@secrets:hideSecretOnShow', String(hideSecretOnShow))

        setHideSecretOnShow(hideSecretOnShow)
    }
    
    async function loadHideSecretOnShow() {
        const hideSecretOnShow = await AsyncStorage.getItem('@secrets:hideSecretOnShow')
        
        if (typeof hideSecretOnShow === 'string') {
            setHideSecretOnShowOnStorage(hideSecretOnShow === 'true' ? true : false)
        } else {
            setHideSecretOnShowOnStorage(false)
        }
    }

    useEffect(() => {
        loadHideSecretOnShow().then()
    }, [])
    
    return (
        <HideSecretOnShowContext.Provider value={{hideSecretOnShow, setHideSecretOnShow: setHideSecretOnShowOnStorage, loadHideSecretOnShow}}>
           {children}
        </HideSecretOnShowContext.Provider>
    )
}

export function useHideSecretOnShow() {
    return useContext(HideSecretOnShowContext)
}

export default useHideSecretOnShow