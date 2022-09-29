import 'react-native-get-random-values'
import cryptoJs from 'crypto-js'

function encrypt(value: string, secret: string) {
    const encrypted = cryptoJs.AES.encrypt(value, secret).toString()

    return encrypted
}

export default encrypt