import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

function makeAnimationScale(pressed: SharedValue<number>) {
    return useAnimatedStyle(() => ({
        transform: [{ scale: pressed.value }]
    }), [])
}

export default makeAnimationScale