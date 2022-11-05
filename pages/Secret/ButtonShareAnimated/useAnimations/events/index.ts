import { SharedValue } from 'react-native-reanimated'
import onPressInOrOut from './onPressInOrOut'
import onPress from './onPress'
import { TouchableOpacityProps } from 'react-native'

function events(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, onPressFunction: () => void) {
    return {
        activeOpacity: 0.5,
        onPressOut: () => onPressInOrOut(pressed, pressedIcon, 1),
        onPressIn: () => onPressInOrOut(pressed, pressedIcon, 0.8),
        onPress: () => onPress(pressed, pressedIcon, onPressFunction)
    } as TouchableOpacityProps
}

export default events