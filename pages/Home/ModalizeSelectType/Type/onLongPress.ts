import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'

function onLongPress(type: string) {
    Clipboard.setString(type)

    Toast.show({
        text1: 'Tipo copiado!',
        type: 'success',
        onPress() {
            Toast.hide()
        }
    })
}

export default onLongPress