import * as crypto from 'expo-crypto'

async function hash(value: string, salt: number=10) {
    let hashValue: string

    for (let cont = 0;cont < salt;cont++) {
        hashValue = await crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA512, cont === 0 ? value : hashValue)
    }

    return hashValue
}

export default hash