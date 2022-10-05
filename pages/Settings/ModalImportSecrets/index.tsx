import { Dispatch, SetStateAction, FC, useState, useRef, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Container, Title, Input, ButtonSubmit, TextButtonSubmit } from './style'
import { decrypt } from '../../../utils/encrypt'
import Toast from 'react-native-toast-message'
import { TextInput, InteractionManager } from 'react-native'
import usePassword from '../../../contexts/passwordContext'
import useSecrets, { useSecret } from '../../../contexts/secretsContext'

interface Iprops {
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalImportSecrets: FC<Iprops> = ({ setOpenModal }) => {
    const [secrets, setSecrets] = useState('')
    const theme = useTheme()
    const passwordRef = useRef<TextInput>(null)
    const { password: passwordDefault } = usePassword()
    const { setSecrets: setSecretsStorage } = useSecrets()

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => passwordRef.current.focus())
    }, [])

    async function handleSubmit() {
        await setSecretsStorage(JSON.parse(decrypt(secrets, passwordDefault)))

        setOpenModal(false)
        
        Toast.show({
            text1: 'Segredos importados com sucesso!',
            type: 'success',
            onPress() {
                Toast.hide()
            }
        })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Title>Importar segredos</Title>
                <KeyboardAvoidingView behavior="height" enabled>
                    <Input
                        value={secrets}
                        ref={passwordRef}
                        autoCapitalize="none"
                        placeholder="Segredos..."
                        onChangeText={setSecrets}
                        selectionColor={theme.primary}
                        onSubmitEditing={handleSubmit}
                        placeholderTextColor={theme.primary}
                    />
                    <ButtonSubmit activeOpacity={0.5} onPress={handleSubmit}>
                        <TextButtonSubmit>Importar</TextButtonSubmit>
                    </ButtonSubmit>
                </KeyboardAvoidingView>
            </Container> 
        </TouchableWithoutFeedback>
    )
}

export default ModalImportSecrets