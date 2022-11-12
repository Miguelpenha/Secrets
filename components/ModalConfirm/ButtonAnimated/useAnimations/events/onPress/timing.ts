import { withSequence, withTiming } from 'react-native-reanimated'

function timing() {
    return withSequence(
        withTiming(0.9, {
            duration: 100
        }),
        withTiming(1, {
            duration: 100
        })
    )
}

export default timing