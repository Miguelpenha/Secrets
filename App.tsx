import React, { useState, useEffect } from 'react'
import updateApp from './utils/updateApp'
import AppLoading from 'expo-app-loading'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from './theme'
import { EmojiProvider } from './contexts/emojiContext'
import Routes from './routes'
import 'react-native-gesture-handler'

function App() {
  const [pronto, setPronto] = useState(false)
  
  useEffect(() => {
    updateApp().then()
    setPronto(true)
  }, [])
  
  if (!pronto) {
    return <AppLoading/>
  } else {
    console.log(green('>> App Started'))

    return (
      <ThemeProvider>
        <EmojiProvider>
          <Routes/>
        </EmojiProvider>
      </ThemeProvider>
    )
  }
}

export default App