import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IShowPageTitleContext {
    showPageTitle: boolean
    loadShowPageTitle: () => Promise<void>
    setShowPageTitle: (ShowPageTitle: boolean) => Promise<void>
}

export const ShowPageTitleContext = createContext<IShowPageTitleContext>({} as IShowPageTitleContext)

export const ShowPageTitleProvider: FC = ({ children }) => {
    const [showPageTitle, setShowPageTitle] = useState(true)

    async function setShowPageTitleOnStorage(showPageTitle: boolean) {
        await AsyncStorage.setItem('@secrets:showPageTitle', String(showPageTitle))

        setShowPageTitle(showPageTitle)
    }
    
    async function loadShowPageTitle() {
        const showPageTitle = await AsyncStorage.getItem('@secrets:showPageTitle')
        
        if (typeof showPageTitle === 'string') {
            setShowPageTitleOnStorage(showPageTitle === 'false' ? false : true)
        } else {
            setShowPageTitleOnStorage(true)
        }
    }

    useEffect(() => {
        loadShowPageTitle().then()
    }, [])
    
    return (
        <ShowPageTitleContext.Provider value={{showPageTitle, setShowPageTitle: setShowPageTitleOnStorage, loadShowPageTitle}}>
           {children}
        </ShowPageTitleContext.Provider>
    )
}

export function useShowPageTitle() {
    return useContext(ShowPageTitleContext)
}

export default useShowPageTitle