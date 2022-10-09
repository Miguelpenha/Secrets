import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Password from '../pages/Password'
import Settings from '../pages/Settings'

function InitialStack() {
    const { Navigator, Screen } = createStackNavigator<Inavigation>()
    
    return (
        <Navigator
            initialRouteName="Password"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Password" component={Password} initialParams={{ initial: true }}/>
            <Screen name="Settings" component={Settings}/>
        </Navigator>
    )
}

export default InitialStack