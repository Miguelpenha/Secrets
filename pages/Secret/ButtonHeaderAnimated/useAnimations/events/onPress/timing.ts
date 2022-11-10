import { withSequence, withTiming } from 'react-native-reanimated'

function timing() {
    return withSequence(
        withTiming(0.8, {
            duration: 200
        }),
        withTiming(1, {
            duration: 200
        })
    )
}

export default timing