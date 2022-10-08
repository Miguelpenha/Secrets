import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from '../types'
import { useVerifiedAccess } from '../contexts/verifiedAccessContext'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import Secret from '../pages/Secret'
import Security from '../pages/Security'
import EditSecret from '../pages/EditSecret'
import CreateSecret from '../pages/CreateSecret'
import Password from '../pages/Password'

function AppStack() {
    const { Navigator, Screen } = createStackNavigator<Inavigation>()
    const { verifiedAccess } = useVerifiedAccess()
    
    return (
        <Navigator
            initialRouteName={verifiedAccess ? 'Home' : 'Password'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home}/>
            <Screen name="Secret" component={Secret}/>
            <Screen name="Settings" component={Settings}/>
            <Screen name="Security" component={Security}/>
            <Screen name="EditSecret" component={EditSecret}/>
            <Screen name="CreateSecret" component={CreateSecret}/>
            <Screen name="Password" component={Password} initialParams={{ objective: 'check' }}/>
        </Navigator>
    )
}

export default AppStack