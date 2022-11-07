import { useEffect } from 'react'
import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'

function useAnimations(checkUpdating?: boolean) {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)
    const pressedText = useSharedValue(1)
    const pressedLoading = useSharedValue(0)

    useEffect(() => {
        if (checkUpdating != null) {
            pressedLoading.value = withTiming(checkUpdating ? 90 : 0, {
                duration: 100
            })
        }
    }, [checkUpdating])

    return {
        animationButton: useAnimatedStyle(() => ({
            transform: [{ scale: pressed.value }]
        })),
        animationIconButton: useAnimatedStyle(() => ({
            transform: [{ scale: pressedIcon.value }, { rotate: `${pressedLoading.value}deg` }]
        })),
        animationTextButton: useAnimatedStyle(() => ({
            transform: [{ scale: pressedText.value }]
        })),
        events: (onPress: () => void) => events(pressed, pressedIcon, pressedText, onPress)
    }
}

export default useAnimations