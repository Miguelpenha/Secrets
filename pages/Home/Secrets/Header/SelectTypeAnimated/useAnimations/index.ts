import { useSharedValue, useAnimatedStyle, withSequence, withTiming } from 'react-native-reanimated'
import events from './events'

function useAnimations() {
    const pressedContainer = useSharedValue(1)
    const pressedText = useSharedValue(1)
    const pressedIcon = useSharedValue(1)
    const rotateIcon = useSharedValue(0)

    return {
        animationContainer: useAnimatedStyle(() => ({
            transform: [{ scale: pressedContainer.value }]
        })),
        animationText: useAnimatedStyle(() => ({
            transform: [{ scale: pressedText.value }]
        })),
        animationIcon: useAnimatedStyle(() => ({
            transform: [{ scale: pressedIcon.value }]
        })),
        animationRotateIcon: (openModalizeSelectType: boolean) => useAnimatedStyle(() => {
            rotateIcon.value = withTiming(openModalizeSelectType ? -180 : 0, { duration: 300 })

            return ({
                transform: [{ rotate: `${rotateIcon.value}deg` }]
            })
        }, [openModalizeSelectType]),
        events: (onPress: () => void) => events(pressedContainer, pressedText, pressedIcon, onPress)
    }
}

export default useAnimations