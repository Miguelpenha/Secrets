import { SharedValue } from 'react-native-reanimated'
import onPressIn from './onPressIn'
import onPressOut from './onPressOut'
import onPress from './onPress'
import { TouchableOpacityProps } from 'react-native'

function events(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, pressedNext: SharedValue<number>, onPressFunction: () => void) {
    return {
        activeOpacity: 0.5,
        onPressIn: () => onPressIn(pressed, pressedIcon, pressedNext),
        onPressOut: () => onPressOut(pressed, pressedIcon, pressedNext),
        onPress: () => onPress(pressed, pressedIcon, pressedNext, onPressFunction)
    } as TouchableOpacityProps
}

export default events