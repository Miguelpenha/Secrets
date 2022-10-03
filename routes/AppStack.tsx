import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import Secret from '../pages/Secret'
import Security from '../pages/Security'
import CreateSecret from '../pages/CreateSecret'
import Password from '../pages/Password'

function AppStack() {
    const { Navigator, Screen } = createStackNavigator<Inavigation>()
    
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home}/>
            <Screen name="Secret" component={Secret}/>
            <Screen name="Settings" component={Settings}/>
            <Screen name="Security" component={Security}/>
            <Screen name="CreateSecret" component={CreateSecret}/>
            <Screen name="Password" component={Password} initialParams={{ initial: false }}/>
        </Navigator>
    )
}

export default AppStack