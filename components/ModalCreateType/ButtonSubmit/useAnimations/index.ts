import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'

function useAnimations() {
    const pressed = useSharedValue(1)
    const pressedText = useSharedValue(1)

    return {
        animationContainer: useAnimatedStyle(() => ({
            transform: [{ scale: pressed.value }]
        })),
        animationText: useAnimatedStyle(() => ({
            transform: [{ scale: pressedText.value }]
        })),
        events: (disabled: boolean, onPress: () => void) => events(pressed, pressedText, disabled, onPress)
    }
}

export default useAnimations