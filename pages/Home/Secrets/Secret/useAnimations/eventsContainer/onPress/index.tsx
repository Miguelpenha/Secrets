import { SharedValue } from 'react-native-reanimated'
import defaultTiming from './defaultTiming'

function onPress(scaleContainer: SharedValue<number>, translateXIconNext: SharedValue<number>, onPress: () => void) {
    scaleContainer.value = defaultTiming(0.9, 1)

    translateXIconNext.value = defaultTiming(12, 0)
    
    onPress()
}

export default onPress