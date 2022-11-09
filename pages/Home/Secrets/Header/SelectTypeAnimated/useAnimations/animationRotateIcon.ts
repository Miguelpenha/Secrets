import { SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated"

function animationRotateIcon(rotateIcon: SharedValue<number>, openModalize: boolean) {
    return useAnimatedStyle(() => {
        rotateIcon.value = withTiming(openModalize ? -180 : 0, {
            duration: 300
        })
    
        return ({
            transform: [{ rotate: `${rotateIcon.value}deg` }]
        })
    }, [openModalize])
}

export default animationRotateIcon