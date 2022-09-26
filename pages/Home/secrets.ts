import { ISecret } from '../../types'

const secrets: ISecret[] = [
    {
        type: 'senha',
        hideIcon: true,
        icon: 'vpn-key',
        value: 'senha senha senha',
        name: 'Senha de tal coisa'
    },
    {
        icon: 'book',
        type: 'senha',
        value: 'senha senha senha',
        name: 'Anotação de tal dia'
    },
    {
        type: 'senha',
        icon: 'vpn-key',
        value: 'senha senha senha',
        name: 'Senha de tal outra coisa'
    },
    {
        secure: true,
        type: 'senha',
        hideIcon: true,
        icon: 'vpn-key',
        value: 'senha senha senha',
        name: 'Senha de tal coisa',
        password: 'senha tal'
    }
]

export default [...secrets, ...secrets, ...secrets]