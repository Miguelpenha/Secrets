import { SharedValue } from 'react-native-reanimated'
import timing from './timing'

function onPress(pressed: SharedValue<number>[], onPress: () => void) {
    pressed.map(pressed => pressed.value = timing())
    
    onPress()
}

export default onPress