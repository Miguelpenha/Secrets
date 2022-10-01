import { SharedValue, withSequence, withTiming } from 'react-native-reanimated'
import Toast from 'react-native-toast-message'

function onPress(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, onPress: () => Promise<void>) {
    pressed.value = withSequence(
        withTiming(0.8, {
            duration: 100
        }),
        withTiming(1, {
            duration: 100
        })
    )

    pressedIcon.value = withSequence(
        withTiming(0.8, {
            duration: 200
        }),
        withTiming(1, {
            duration: 200
        })
    )
    
    setTimeout(async () => {
        await onPress()

        Toast.show({
            type: 'error',
            text1: 'Segredo excluído com sucesso',
            onPress() {
                Toast.hide()
            }
        })
    }, 200)
}

export default onPress