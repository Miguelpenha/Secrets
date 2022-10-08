import { green } from '../../utils/colorsLogs'
import Toast from 'react-native-toast-message'
import { Inavigation } from '../../types'
import { compare } from '../../utils/hash'
import { StackNavigationProp } from '@react-navigation/stack'
import objectives from './objectives'

async function handleSubmit(password: string, passwordDefault: string, mutatePassword: (password: string) => Promise<void>, objective: Inavigation['Password']['objective'], navigation: StackNavigationProp<Inavigation>) {
    if (password) {
        await mutatePassword(password)

        switch (objective) {
            case 'create':
                console.log(green('>> Created password'))

                Toast.show({
                    type: 'success',
                    text1: 'Senha criada com sucesso!',
                    onPress() {
                        Toast.hide()
                    }
                })

                !objectives[objective].initial && navigation.reset({
                    routes: [{ name: 'Home' }]
                })

                break
            case 'change':
                console.log(green('>> Changed password'))

                Toast.show({
                    type: 'success',
                    text1: 'Senha alterada com sucesso!',
                    onPress() {
                        Toast.hide()
                    }
                })

                navigation.navigate('Home')

                break
            case 'check':
                if (await compare(password, passwordDefault)) {
                    console.log(green('>> Verified password'))

                    Toast.show({
                        type: 'info',
                        text1: 'Senha verificada com sucesso',
                        onPress() {
                            Toast.hide()
                        }
                    })

                    !objectives[objective].initial && navigation.reset({
                        routes: [{ name: 'Home' }]
                    })

                    break
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Senha invalida',
                        onPress() {
                            Toast.hide()
                        }
                    })
    
                    break
                }
        }
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