import { Dispatch, SetStateAction, FC, useState } from 'react'
import { useTheme } from 'styled-components'
import { useSecret } from '../../../contexts/secretsContext'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Container, Title, ContainerInput, ContainerIconShow, IconShow, Input, ButtonSubmit, TextButtonSubmit, Loading } from './style'
import { compare } from '../../../utils/hash'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

interface Iprops {
    id: string
    setOpenModal: Dispatch<SetStateAction<string | null>>
}

const ModalVerify: FC<Iprops> = ({ id, setOpenModal }) => {
    const secret = useSecret(id)
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const theme = useTheme()
    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Title>Verificar senha</Title>
                <KeyboardAvoidingView behavior="height" enabled>
                    <ContainerInput>
                        <ContainerIconShow onPress={() => setShowPassword(!showPassword)}>
                            <IconShow name={`visibility${showPassword ? '' : '-off'}`} size={25}/>
                        </ContainerIconShow>
                        <Input
                            autoFocus
                            value={password}
                            autoCapitalize="none"
                            placeholder="Senha..."
                            onChangeText={setPassword}
                            autoCompleteType="password"
                            selectionColor={theme.primary}
                            secureTextEntry={!showPassword}
                            placeholderTextColor={theme.primary}
                            keyboardType={showPassword ? 'visible-password' : 'default'}
                        />
                    </ContainerInput>
                    <ButtonSubmit activeOpacity={0.5} onPress={async () => {
                        if (await compare(password, secret.password)) {
                            setOpenModal(null)

                            navigation.navigate('Secret', {
                                id
                            })

                            Toast.show({
                                text1: 'Senha validada com sucesso!',
                                type: 'success',
                                onPress() {
                                    Toast.hide()
                                }
                            })
                        } else {
                            setOpenModal(null)

                            Toast.show({
                                text1: 'Senha inválida',
                                type: 'error',
                                onPress() {
                                    Toast.hide()
                                }
                            })
                        }
                    }}>
                        <TextButtonSubmit>Verificar</TextButtonSubmit>
                    </ButtonSubmit>
                    {secret ? <></> : <Loading/>}
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default ModalVerify