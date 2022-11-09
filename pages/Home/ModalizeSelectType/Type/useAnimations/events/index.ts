import { SharedValue } from 'react-native-reanimated'
import onPressInOrOut from './onPressInOrOut'
import onPress from './onPress'
import { TouchableOpacityProps } from 'react-native'

function events(pressed: SharedValue<number>, pressedText: SharedValue<number>, onPressFunction: () => void) {
    return {
        activeOpacity: 0.5,
        onPressOut: () => onPressInOrOut(pressed, pressedText, 1),
        onPressIn: () => onPressInOrOut(pressed, pressedText, 0.9),
        onPress: () => onPress([pressed, pressedText], onPressFunction)
    } as TouchableOpacityProps
}

export default events