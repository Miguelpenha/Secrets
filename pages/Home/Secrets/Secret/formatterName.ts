import { ISecret } from '../../../../types'
import { Dimensions } from 'react-native'
import limitText from '../../../../utils/limitText'

function formatterName(secret: ISecret) {
    if (!secret.hideName) {
        const limit = Dimensions.get('window').scale*8

        return limitText(secret.name, limit)
    } else {
        return '*******************'
    }
}

export default formatterName