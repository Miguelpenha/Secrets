import * as crypto from 'expo-crypto'

async function compare(value: string, hash: string, salt: number=10) {
    let hashValue: string

    for (let cont = 0;cont < salt;cont++) {
        hashValue = await crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA512, cont === 0 ? value : hashValue)
    }

    console.log(hashValue, '\n\n')
    console.log(hash)

    if(hashValue === hash) {
        return true
    } else {
        return false
    }
}

export default compare