import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import makeAnimationScale from './makeAnimationScale'
import events from './events'

function useAnimations() {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)
    const pressedName = useSharedValue(1)
    const pressedNext = useSharedValue(0)

    return {
        animationPressed: makeAnimationScale(pressed),
        animationPressedIcon: makeAnimationScale(pressedIcon),
        animationPressedName: makeAnimationScale(pressedName),
        animationPressedNext: useAnimatedStyle(() => ({
            transform: [{ translateX: pressedNext.value }]
        }), []),
        events: (onPress: () => void) => events(pressed, pressedIcon, pressedName, pressedNext, onPress)
    }
}

export default useAnimations