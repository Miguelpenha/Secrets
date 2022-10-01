import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import events from './events'
import makeAnimationScale from './makeAnimationScale'

function useAnimations() {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)
    const pressedNext = useSharedValue(0)

    return {
        animationPressed: makeAnimationScale(pressed),
        animationPressedIcon: makeAnimationScale(pressedIcon),
        animationPressedNext: useAnimatedStyle(() => ({
            transform: [{ translateX: pressedNext.value }]
        }), []),
        events: (onPress: () => void) => events(pressed, pressedIcon, pressedNext, onPress)
    }
}

export default useAnimations