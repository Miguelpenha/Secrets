import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'
import animationRotateIcon from './animationRotateIcon'

function useAnimations() {
    const pressed = useSharedValue(1)
    const rotateIcon = useSharedValue(0)

    return {
        animationContainer: useAnimatedStyle(() => ({
            transform: [{ scale: pressed.value }]
        }), []),
        events: (onPress: () => void) => events(pressed, onPress),
        animationRotateIcon: (openModalize: boolean) => animationRotateIcon(rotateIcon, openModalize)
    }
}

export default useAnimations