import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IEmojiContext {
    showEmoji: boolean
    loadShowEmoji: () => Promise<void>
    setShowEmoji: (showEmoji: boolean) => Promise<void>
}

export const EmojiContext = createContext<IEmojiContext>({} as IEmojiContext)

export const EmojiProvider: FC = ({ children }) => {
    const [showEmoji, setShowEmoji] = useState<boolean>(true)

    async function setShowEmojiOnStorage(showEmoji: boolean) {
        AsyncStorage.setItem('@secrets:showEmoji', String(showEmoji))

        setShowEmoji(showEmoji)
    }
    
    async function loadShowEmoji() {
        const showEmoji = await AsyncStorage.getItem('@secrets:showEmoji')
        
        if (typeof showEmoji === 'string') {
            setShowEmojiOnStorage(showEmoji === 'true' ? true : false)
        } else {
            setShowEmojiOnStorage(true)
        }
    }

    useEffect(() => {
        loadShowEmoji().then()
    }, [])
    
    return (
        <EmojiContext.Provider value={{showEmoji, setShowEmoji: setShowEmojiOnStorage, loadShowEmoji}}>
           {children}
        </EmojiContext.Provider>
    )
}

export function useShowEmoji() {
    return useContext(EmojiContext)
}

export default useShowEmoji