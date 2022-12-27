import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressOut(scaleContainer: SharedValue<number>, translateXIconNext: SharedValue<number>) {
    scaleContainer.value = withTiming(1)
    
    translateXIconNext.value = withTiming(0, {
        duration: 550
    })
}

export default onPressOut