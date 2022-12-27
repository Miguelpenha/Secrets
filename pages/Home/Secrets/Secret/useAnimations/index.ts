import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import eventsContainer from './eventsContainer'

function useAnimations() {
    const scaleContainer = useSharedValue(1)
    const translateXIconNext = useSharedValue(0)

    const animationPressed = useAnimatedStyle(() => ({
        transform: [{ scale: scaleContainer.value }]
    }))

    const animationIconNextPressed = useAnimatedStyle(() => ({
        transform: [{ translateX: translateXIconNext.value }]
    }))

    return {
        animationPressed,
        animationIconNextPressed,
        eventsContainer: (onPress: () => void) => eventsContainer(scaleContainer, translateXIconNext, onPress)
    }
}

export default useAnimations