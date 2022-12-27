import { SharedValue } from 'react-native-reanimated'
import onPressIn from './onPressIn'
import onPressOut from './onPressOut'
import onPress from './onPress'
import { TouchableOpacityProps } from 'react-native'

function eventsContainer(scaleContainer: SharedValue<number>, translateXIconNext: SharedValue<number>, onPressFunction: () => void) {
    return {
        activeOpacity: 0.5,
        onPressIn: () => onPressIn(scaleContainer, translateXIconNext),
        onPressOut: () => onPressOut(scaleContainer, translateXIconNext),
        onPress: () => onPress(scaleContainer, translateXIconNext, onPressFunction)
    } as TouchableOpacityProps
}

export default eventsContainer