import { withSequence, withTiming } from 'react-native-reanimated'

function defaultTiming(valueStart: number, valueEnd: number) {
    return (
        withSequence(
            withTiming(valueStart, {
                duration: 200
            }), withTiming(valueEnd, {
                duration: 200
            })
        )
    )
}

export default defaultTiming