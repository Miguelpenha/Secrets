import { useSharedValue } from 'react-native-reanimated'
import makeUseAnimatedStyle from './makeUseAnimatedStyle'
import events from './events'

function useAnimations() {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)

    return {
        animationButtonDelete: makeUseAnimatedStyle(pressed.value),
        animationIconButtonDelete: makeUseAnimatedStyle(pressedIcon.value),
        events: (onPress: () => Promise<void>) => events(pressed, pressedIcon, onPress)
    }
}

export default useAnimations