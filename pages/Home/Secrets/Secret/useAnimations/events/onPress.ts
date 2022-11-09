import { SharedValue, withSequence, withTiming } from 'react-native-reanimated'

function onPress(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, pressedName: SharedValue<number>, pressedNext: SharedValue<number>, onPress: () => void) {
    pressed.value = withSequence(
        withTiming(0.9, {
            duration: 150
        }), withTiming(1, {
            duration: 150
        })
    )

    pressedIcon.value = withSequence(
        withTiming(0.7, {
            duration: 200
        }), withTiming(1, {
            duration: 200
        })
    )

    pressedName.value = withSequence(
        withTiming(0.85, {
            duration: 180
        }), withTiming(1, {
            duration: 180
        })
    )

    pressedNext.value = withSequence(
        withTiming(12, {
            duration: 200
        }), withTiming(0, {
            duration: 200
        })
    )
    
    onPress()
}

export default onPress