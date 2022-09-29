import 'react-native-get-random-values'
import cryptoJs from 'crypto-js'

function decrypt(encrypt: string, secret: string) {
    const bytes = cryptoJs.AES.decrypt(encrypt, secret)

    return bytes.toString(cryptoJs.enc.Utf8)
}

export default decrypt