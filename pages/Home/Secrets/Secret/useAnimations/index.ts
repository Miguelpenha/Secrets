import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import events from './events'

function useAnimations() {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)
    const pressedNext = useSharedValue(0)

    const animationPressed = useAnimatedStyle(() => ({
        transform: [{ scale: pressed.value }]
    }), [])

    const animationPressedIcon = useAnimatedStyle(() => ({
        transform: [{ scale: pressedIcon.value }]
    }), [])

    const animationPressedNext = useAnimatedStyle(() => ({
        transform: [{ translateX: pressedNext.value }]
    }), [])

    return {
        animationPressed,
        animationPressedIcon,
        animationPressedNext,
        events: (onPress: () => void) => events(pressed, pressedIcon, pressedNext, onPress)
    }
}

export default useAnimations