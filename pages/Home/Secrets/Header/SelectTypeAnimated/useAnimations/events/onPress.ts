import { SharedValue, withSequence, withTiming } from 'react-native-reanimated'

function onPress(pressed: SharedValue<number>, onPress: () => void) {
    pressed.value = withSequence(
        withTiming(0.9, {
            duration: 150
        }),
        withTiming(1, {
            duration: 150
        })
    )

    onPress()
}

export default onPress