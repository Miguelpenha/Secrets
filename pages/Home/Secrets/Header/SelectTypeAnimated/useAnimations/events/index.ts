import { SharedValue, withTiming } from 'react-native-reanimated'
import onPressInOrOut from './onPressInOrOut'
import onPress from './onPress'
import { TouchableOpacityProps } from 'react-native'

function events(pressed: SharedValue<number>, onPressFunction: () => void, onLongPressFunction: () => void, type: string) {
    return {
        activeOpacity: 0.5,
        onPressOut: () => onPressInOrOut(pressed),
        onPressIn: () => onPressInOrOut(pressed, 0.9),
        onPress: () => onPress(pressed, onPressFunction),
        onLongPress: () => {
            if (type) {
                pressed.value = withTiming(1, {
                    duration: 200
                })
            }

            onLongPressFunction()
        }
    } as TouchableOpacityProps
}

export default events