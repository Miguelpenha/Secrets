import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'
import animationRotateIcon from './animationRotateIcon'

function useAnimations(type: string) {
    const pressed = useSharedValue(1)
    const rotateIcon = useSharedValue(0)

    return {
        animationContainer: useAnimatedStyle(() => ({
            transform: [{ scale: pressed.value }]
        }), []),
        animationRotateIcon: (openModalize: boolean) => animationRotateIcon(rotateIcon, openModalize),
        events: (onPress: () => void, onLongPress: () => void) => events(pressed, onPress, onLongPress, type)
    }
}

export default useAnimations