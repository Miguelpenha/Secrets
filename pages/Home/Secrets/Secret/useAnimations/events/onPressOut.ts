import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressOut(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, pressedNext: SharedValue<number>) {
    pressed.value = withTiming(1)

    pressedIcon.value = withTiming(1, {
        duration: 550
    })

    pressedNext.value = withTiming(0, {
        duration: 550
    })
}

export default onPressOut