import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'

function useAnimations() {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)

    return {
        animationButtonDelete: useAnimatedStyle(() => ({
            transform: [{ scale: pressed.value }]
        })),
        animationIconButtonDelete: useAnimatedStyle(() => ({
            transform: [{ scale: pressedIcon.value }]
        })),
        events: (onPress: () => void) => events(pressed, pressedIcon, onPress)
    }
}

export default useAnimations