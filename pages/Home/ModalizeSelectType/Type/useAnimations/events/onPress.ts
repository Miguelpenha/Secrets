import { SharedValue, withSequence, withTiming } from 'react-native-reanimated'

function onPress(pressed: SharedValue<number>, pressedText: SharedValue<number>, onPress: () => void) {
    pressed.value = withSequence(
        withTiming(0.9, {
            duration: 100
        }),
        withTiming(1, {
            duration: 100
        })
    )

    pressedText.value = withSequence(
        withTiming(0.9, {
            duration: 100
        }),
        withTiming(1, {
            duration: 100
        })
    )
    
    onPress()
}

export default onPress