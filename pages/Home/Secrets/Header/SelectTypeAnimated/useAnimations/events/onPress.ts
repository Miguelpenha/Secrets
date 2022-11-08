import { SharedValue, withSequence, withTiming } from 'react-native-reanimated'

function onPress(pressedContainer: SharedValue<number>, pressedText: SharedValue<number>, pressedIcon: SharedValue<number>, onPress: () => void) {
    pressedContainer.value = withSequence(
        withTiming(0.95, {
            duration: 150
        }),
        withTiming(1, {
            duration: 150
        })
    )

    pressedText.value = withSequence(
        withTiming(0.95, {
            duration: 150
        }),
        withTiming(1, {
            duration: 150
        })
    )

    pressedIcon.value = withSequence(
        withTiming(0.8, {
            duration: 150
        }),
        withTiming(1, {
            duration: 150
        })
    )
    
    onPress()
}

export default onPress