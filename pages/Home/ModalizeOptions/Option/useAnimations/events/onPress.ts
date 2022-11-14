import { SharedValue, withSequence, withTiming } from 'react-native-reanimated'

function onPress(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, pressedText: SharedValue<number>, onPress: () => void) {
    pressed.value = withSequence(
        withTiming(0.9, {
            duration: 100
        }),
        withTiming(1, {
            duration: 100
        })
    )

    pressedIcon.value = withSequence(
        withTiming(0.9, {
            duration: 200
        }),
        withTiming(1, {
            duration: 200
        })
    )

    pressedText.value = withSequence(
        withTiming(0.9, {
            duration: 200
        }),
        withTiming(1, {
            duration: 200
        })
    )
    
    setTimeout(onPress, 200)
}

export default onPress