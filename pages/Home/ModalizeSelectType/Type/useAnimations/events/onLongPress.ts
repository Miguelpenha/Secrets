import { SharedValue } from 'react-native-reanimated'
import patternOnPress from './patternOnPress'

function onLongPress(pressed: SharedValue<number>, pressedText: SharedValue<number>, onLongPress: () => void) {
    patternOnPress(pressed, pressedText)

    onLongPress()
}

export default onLongPress