import { MaterialIcons } from '@expo/vector-icons'
import { ISecret } from '../../types'
import { StackNavigationProp } from '@react-navigation/stack'
import uuid from 'react-native-uuid'
import { hash } from '../../utils/hash'
import Toast from 'react-native-toast-message'


async function onSubmit(icon: keyof typeof MaterialIcons.glyphMap, name: string, type: string, value: string, hideIcon: boolean, secure: boolean, password: string, createSecret: (secret: ISecret) => Promise<void>, navigation: StackNavigationProp<ReactNavigation.RootParamList>) {
    if (icon && name && type && value && (!secure || secure && password)) {
        await createSecret({
            name,
            type,
            icon,
            value,
            secure,
            hideIcon,
            id: String(uuid.v4()),
            password: await hash(password, 10)
        })

        navigation.navigate('Home')

        Toast.show({
            type: 'success',
            text1: 'Segredo criado com sucesso',
            onPress() {
                Toast.hide()
            }
        })
    } else {
        Toast.show({
            type: 'error',
            text1: 'Campos não preenchidos',
            onPress() {
                Toast.hide()
            }
        })
    }
}

export default onSubmit