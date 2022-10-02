import { Dispatch, SetStateAction, FC, useState } from 'react'
import { useTheme } from 'styled-components'
import { useSecret } from '../../contexts/secretsContext'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Container, Title, ContainerInput, ContainerIconShow, IconShow, Input, ButtonSubmit, TextButtonSubmit } from './style'
import { compare } from '../../utils/hash'
import Toast from 'react-native-toast-message'

interface Iprops {
    id: string
    hideToastFinal?: boolean
    onSubmit: (id: string) => void
    setOpenModal: Dispatch<SetStateAction<string | null>>
}

const ModalVerifyPassword: FC<Iprops> = ({ id, setOpenModal, onSubmit, hideToastFinal }) => {
    const secret = useSecret(id)
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const theme = useTheme()

    async function handleSubmit() {
        if (await compare(password, secret.password)) {
            setOpenModal(null)

            onSubmit(id)

            !hideToastFinal && Toast.show({
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
    }

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
                            onSubmitEditing={handleSubmit}
                            keyboardType={showPassword ? 'visible-password' : 'default'}
                        />
                    </ContainerInput>
                    <ButtonSubmit activeOpacity={0.5} onPress={handleSubmit}>
                        <TextButtonSubmit>Verificar</TextButtonSubmit>
                    </ButtonSubmit>
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default ModalVerifyPassword