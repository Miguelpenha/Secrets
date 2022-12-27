import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressIn(scaleContainer: SharedValue<number>, translateXIconNext: SharedValue<number>) {
    scaleContainer.value = withTiming(0.9)

    translateXIconNext.value = withTiming(12)
}

export default onPressIn