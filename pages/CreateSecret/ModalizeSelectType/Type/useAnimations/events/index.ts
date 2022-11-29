import { SharedValue } from 'react-native-reanimated'
import patternOnPress from './patternOnPress'
import onPress from './onPress'
import onLongPress from './onLongPress'
import { TouchableOpacityProps } from 'react-native'

function events(pressed: SharedValue<number>, pressedText: SharedValue<number>, onPressFunction: () => void, onLongPressFunction: () => void) {
    return {
        activeOpacity: 0.5,
        onPressOut: () => patternOnPress(pressed, pressedText),
        onPressIn: () => patternOnPress(pressed, pressedText, 0.9),
        onPress: () => onPress([pressed, pressedText], onPressFunction),
        onLongPress: () => onLongPress(pressed, pressedText, onLongPressFunction)
    } as TouchableOpacityProps
}

export default events