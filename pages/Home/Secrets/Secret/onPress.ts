import { ISecret } from '../../../../types'
import { NavigationProp } from '@react-navigation/native'

function onPress(secret: ISecret, onVerify: (id: string) => void, navigation: NavigationProp<ReactNavigation.RootParamList>) {
    if (secret.secure) {
        onVerify(secret.id)
    } else {
        navigation.navigate('Secret', { id: secret.id })
    }
}

export default onPress