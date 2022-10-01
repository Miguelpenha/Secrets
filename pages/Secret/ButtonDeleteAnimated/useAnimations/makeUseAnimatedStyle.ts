import { useAnimatedStyle } from 'react-native-reanimated'

function makeUseAnimatedStyle(pressed: number) {
    return useAnimatedStyle(() => ({
        transform: [{ scale: pressed }]
    }))
}

export default makeUseAnimatedStyle