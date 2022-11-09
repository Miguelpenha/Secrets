import { SharedValue } from 'react-native-reanimated'
import onPressInOrOut from './onPressInOrOut'
import onPress from './onPress'
import { TouchableOpacityProps } from 'react-native'

function events(pressed: SharedValue<number>, onPressFunction: () => void) {
    return {
        activeOpacity: 0.5,
        onPressOut: () => onPressInOrOut(pressed),
        onPressIn: () => onPressInOrOut(pressed, 0.9),
        onPress: () => onPress(pressed, onPressFunction)
    } as TouchableOpacityProps
}

export default events