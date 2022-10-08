import React, { useState, useEffect } from 'react'
import updateApp from './utils/updateApp'
import AppLoading from 'expo-app-loading'
import { green } from './utils/colorsLogs'
import { PasswordProvider } from './contexts/passwordContext'
import { SecurityConfigurationProvider } from './contexts/securityConfigurationContext'
import { VerifiedAccessProvider } from './contexts/verifiedAccessContext'
import { ThemeProvider } from './theme'
import { SecretsProvider } from './contexts/secretsContext'
import { EmojiProvider } from './contexts/emojiContext'
import { HideSecretOnShowProvider } from './contexts/hideSecretOnShowContext'
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
      <PasswordProvider>
        <SecurityConfigurationProvider>
          <VerifiedAccessProvider>
            <ThemeProvider>
              <SecretsProvider>
                <EmojiProvider>
                  <HideSecretOnShowProvider>
                    <Routes/>
                  </HideSecretOnShowProvider>
                </EmojiProvider>
              </SecretsProvider>
            </ThemeProvider>
          </VerifiedAccessProvider>
        </SecurityConfigurationProvider>
      </PasswordProvider>
    )
  }
}

export default App