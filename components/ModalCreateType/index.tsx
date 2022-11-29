import { Dispatch, SetStateAction, FC, useState, useRef } from 'react'
import Toast from 'react-native-toast-message'
import { useTheme } from 'styled-components'
import Modal from 'react-native-modal'
import { TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Container, Title, Input } from './style'
import ButtonSubmit from './ButtonSubmit'

interface Iprops {
    openModal: boolean
    onSubmit: (type: string) => void
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalCreateType: FC<Iprops> = ({ openModal, setOpenModal, onSubmit }) => {
    const [type, setType] = useState('')
    const typeRef = useRef<TextInput>(null)
    const theme = useTheme()

    async function handleSubmit() {
        setOpenModal(false)

        Toast.show({
            text1: 'Tipo criado com sucesso!',
            type: 'success',
            onPress() {
                Toast.hide()
            }
        })

        onSubmit(type)
    }

    return (
        <Modal
            isVisible={openModal}
            onModalHide={() => setType('')}
            onShow={() => {
                setTimeout(() => {
                    typeRef.current?.blur()
                    typeRef.current?.focus()
                }, 100)
            }}
            onBackdropPress={() => setOpenModal(false)}
            onBackButtonPress={() => setOpenModal(false)}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Title>Criar tipo</Title>
                    <KeyboardAvoidingView behavior="height" enabled>
                        <Input
                            value={type}
                            ref={typeRef}
                            placeholder="Tipo..."
                            onChangeText={setType}
                            selectionColor={theme.primary}
                            onSubmitEditing={handleSubmit}
                            placeholderTextColor={theme.primary}
                        />
                        <ButtonSubmit disabled={Boolean(type)} onPress={handleSubmit}/>
                    </KeyboardAvoidingView>
                </Container>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalCreateType