import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import Secret from '../pages/Secret'
import CreateSecret from '../pages/CreateSecret'

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
            <Screen name="CreateSecret" component={CreateSecret}/>
        </Navigator>
    )
}

export default AppStack