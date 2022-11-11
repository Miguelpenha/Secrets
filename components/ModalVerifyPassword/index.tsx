import { Dispatch, SetStateAction, FC, useState, useRef, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useSecret } from '../../contexts/secretsContext'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Container, Title, ContainerInput, ContainerIconShow, IconShow, Input } from './style'
import { compare } from '../../utils/hash'
import Toast from 'react-native-toast-message'
import { TextInput, InteractionManager } from 'react-native'
import usePassword from '../../contexts/passwordContext'
import ButtonSubmit from './ButtonSubmit'

interface Iprops {
    id?: string
    hideToastFinal?: boolean
    onSubmit: (id: string) => void
    setOpenModal: Dispatch<SetStateAction<string | null>>
}

const ModalVerifyPassword: FC<Iprops> = ({ id, setOpenModal, onSubmit, hideToastFinal }) => {
    const secret = useSecret(id)
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const theme = useTheme()
    const passwordRef = useRef<TextInput>(null)
    const { password: passwordDefault } = usePassword()

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => passwordRef.current.focus())
    }, [])

    async function handleSubmit() {
        if ((secret && secret.password) ? await compare(password, secret.password) : await compare(password, passwordDefault)) {
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
                            value={password}
                            ref={passwordRef}
                            autoCapitalize="none"
                            placeholder="Senha..."
                            onChangeText={setPassword}
                            autoCompleteType="password"
                            selectionColor={theme.primary}
                            onSubmitEditing={handleSubmit}
                            secureTextEntry={!showPassword}
                            placeholderTextColor={theme.primary}
                            keyboardType={showPassword ? 'visible-password' : 'default'}
                        />
                    </ContainerInput>
                    <ButtonSubmit onPress={handleSubmit}/>
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default ModalVerifyPassword