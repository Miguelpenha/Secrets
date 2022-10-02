import { green } from '../../utils/colorsLogs'
import Toast from 'react-native-toast-message'

async function handleSubmit(password: string, mutatePassword: (password: string) => Promise<void>) {
    if (password) {
        await mutatePassword(password)

        console.log(green('>> Created password'))

        Toast.show({
            type: 'success',
            text1: 'Senha criada com sucesso',
            onPress() {
                Toast.hide()
            }
        })
    } else {
        Toast.show({
            type: 'error',
            text1: 'Senha não preenchida',
            onPress() {
                Toast.hide()
            }
        })
    }
}

export default handleSubmit