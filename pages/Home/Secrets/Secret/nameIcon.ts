import { ISecret } from '../../../../types'
import { MaterialIcons } from '@expo/vector-icons'

function nameIcon(secret: ISecret): keyof typeof MaterialIcons.glyphMap {
    if (!secret.hideIcon) {
        return secret.icon
    } else {
        return 'lock'
    }
}

export default nameIcon