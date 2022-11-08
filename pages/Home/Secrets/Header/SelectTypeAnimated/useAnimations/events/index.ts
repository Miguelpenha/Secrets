import { SharedValue } from 'react-native-reanimated'
import onPressInOrOut from './onPressInOrOut'
import onPress from './onPress'
import { TouchableOpacityProps } from 'react-native'

function events(pressedContainer: SharedValue<number>, pressedText: SharedValue<number>, pressedIcon: SharedValue<number>, onPressFunction: () => void) {
    return {
        activeOpacity: 0.5,
        onPressOut: () => onPressInOrOut(pressedContainer, pressedText, pressedIcon, 1, 1, 1),
        onPressIn: () => onPressInOrOut(pressedContainer, pressedText, pressedIcon, 0.95, 0.95, 0.8),
        onPress: () => onPress(pressedContainer, pressedText, pressedIcon, onPressFunction)
    } as TouchableOpacityProps
}

export default events