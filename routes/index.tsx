import { useTheme } from 'styled-components'
import usePassword from '../contexts/passwordContext'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { darkThemeRouter, lightThemeRouter } from '../theme/routes'
import InitialStack from './InitialStack'
import AppStack from './AppStack'
import Toast from 'react-native-toast-message'
import toastConfig from '../toastConfig'

function Routes() {
  const theme = useTheme()
  const { password } = usePassword()

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.backgroundColor}
        style={theme.name === 'dark' ? 'light' : 'dark'}
      />
      <NavigationContainer theme={theme.name === 'dark' ? darkThemeRouter : lightThemeRouter}>
        {!password ? <InitialStack/> : <AppStack/>}
      </NavigationContainer>
      <Toast config={toastConfig}/>
    </>
  )
}

export default Routes