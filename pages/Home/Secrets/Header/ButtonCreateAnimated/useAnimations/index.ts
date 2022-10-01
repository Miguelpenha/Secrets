import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'

function useAnimations() {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)

    return {
        animationButtonCreate: useAnimatedStyle(() => ({
            transform: [{ scale: pressed.value }]
        })),
        animationIconButtonCreate: useAnimatedStyle(() => ({
            transform: [{ scale: pressedIcon.value }]
        })),
        events: (onPress: () => void) => events(pressed, pressedIcon, onPress)
    }
}

export default useAnimations