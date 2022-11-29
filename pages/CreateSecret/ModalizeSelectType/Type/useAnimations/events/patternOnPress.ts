import { SharedValue, withTiming } from 'react-native-reanimated'

function patternOnPress(pressed: SharedValue<number>, pressedText: SharedValue<number>, value: number=1) {
    pressed.value = withTiming(value)

    pressedText.value = withTiming(value, {
        duration: 900
    })
}

export default patternOnPress