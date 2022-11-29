import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressInOrOut(pressed: SharedValue<number>, timing: number = 1) {
    pressed.value = withTiming(timing, {
        duration: 200
    })
}

export default onPressInOrOut