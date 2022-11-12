import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressInOrOut(pressed: SharedValue<number>, pressedText: SharedValue<number>, value: number) {
    pressed.value = withTiming(value)

    pressedText.value = withTiming(value, {
        duration: 900
    })
}

export default onPressInOrOut