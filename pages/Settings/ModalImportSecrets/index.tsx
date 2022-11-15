import { Dispatch, SetStateAction, FC, useState, useRef } from 'react'
import { useSecrets } from '../../../contexts/secretsContext'
import usePassword from '../../../contexts/passwordContext'
import { decrypt } from '../../../utils/encrypt'
import Toast from 'react-native-toast-message'
import { useTheme } from 'styled-components'
import Modal from 'react-native-modal'
import { TextInput, InteractionManager, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Container, Title, Input } from './style'
import ButtonSubmit from './ButtonSubmit'
import { useFocusEffect } from '@react-navigation/native'

interface Iprops {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalImportSecrets: FC<Iprops> = ({ openModal, setOpenModal }) => {
    const [secrets, setSecrets] = useState('')
    const secretsRef = useRef<TextInput>(null)
    const { setSecrets: setSecretsStorage } = useSecrets()
    const { password: passwordDefault } = usePassword()
    const theme = useTheme()

    useFocusEffect(() => {
        InteractionManager.runAfterInteractions(() => secretsRef.current?.focus())
    })

    async function handleSubmit() {
        setSecrets('')

        if (secrets) {
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
    }

    return (
        <Modal
            isVisible={openModal}
            onBackdropPress={() => setOpenModal(false)}
            onBackButtonPress={() => setOpenModal(false)}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Title>Importar</Title>
                    <KeyboardAvoidingView behavior="height" enabled>
                        <Input
                            value={secrets}
                            ref={secretsRef}
                            autoCapitalize="none"
                            placeholder="Segredos..."
                            onChangeText={setSecrets}
                            selectionColor={theme.primary}
                            onSubmitEditing={handleSubmit}
                            placeholderTextColor={theme.primary}
                        />
                        <ButtonSubmit onPress={handleSubmit}/>
                    </KeyboardAvoidingView>
                </Container>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalImportSecrets