import { SharedValue, withSequence, withTiming } from 'react-native-reanimated'

function onPress(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, onPress: () => void) {
    pressed.value = withSequence(
        withTiming(0.8, {
            duration: 100
        }),
        withTiming(1, {
            duration: 100
        })
    )

    pressedIcon.value = withSequence(
        withTiming(0.8, {
            duration: 200
        }),
        withTiming(1, {
            duration: 200
        })
    )
    
    onPress()
}

export default onPress