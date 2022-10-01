import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressIn(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, pressedNext: SharedValue<number>) {
    pressed.value = withTiming(0.9)

    pressedIcon.value = withTiming(0.7)

    pressedNext.value = withTiming(12, {
        duration: 200
    })
}

export default onPressIn