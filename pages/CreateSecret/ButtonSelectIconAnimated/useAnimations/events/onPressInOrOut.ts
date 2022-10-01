import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressInOrOut(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, value: number) {
    pressed.value = withTiming(value)

    pressedIcon.value = withTiming(value, {
        duration: 900
    })
}

export default onPressInOrOut