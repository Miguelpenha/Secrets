import React, { useState, useEffect } from 'react'
import updateApp from './utils/updateApp'
import AppLoading from 'expo-app-loading'
import { green } from './utils/colorsLogs'
import { PasswordProvider } from './contexts/passwordContext'
import { SecurityConfigurationProvider } from './contexts/securityConfigurationContext'
import { ThemeProvider } from './theme'
import { SecretsProvider } from './contexts/secretsContext'
import { EmojiProvider } from './contexts/emojiContext'
import { StatisticProvider } from './contexts/statisticContext'
import { HideSecretOnShowProvider } from './contexts/hideSecretOnShowContext'
import { ShowPageTitleProvider } from './contexts/showPageTitleContext'
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
          <ThemeProvider>
            <SecretsProvider>
              <EmojiProvider>
                <StatisticProvider>
                  <HideSecretOnShowProvider>
                    <ShowPageTitleProvider>
                      <Routes/>
                    </ShowPageTitleProvider>
                  </HideSecretOnShowProvider>
                </StatisticProvider>
              </EmojiProvider>
            </SecretsProvider>
          </ThemeProvider>
        </SecurityConfigurationProvider>
      </PasswordProvider>
    )
  }
}

export default App