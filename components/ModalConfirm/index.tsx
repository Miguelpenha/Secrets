import { Dispatch, SetStateAction, FC } from 'react'
import Modal from 'react-native-modal'
import { Container, Title, ContainerButtons } from './style'
import Toast from 'react-native-toast-message'
import ButtonAnimated from './ButtonAnimated'

interface Iprops {
    title?: string
    openModal: boolean
    cancelText?: string
    rightOption?: string
    toastMessage: string
    onConfirm: () => void
    toastType?: 'success' | 'info' | 'error'
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalConfirm: FC<Iprops> = ({ openModal, setOpenModal, title, cancelText='Cancelar', onConfirm, toastType='error', toastMessage, rightOption='Deletar' }) => {
    return (
        <Modal
            isVisible={openModal}
            onBackdropPress={() => setOpenModal(false)}
            onBackButtonPress={() => setOpenModal(false)}
        >
            <Container>
                {title && <Title>{title}</Title>}
                <ContainerButtons>
                    <ButtonAnimated onPress={() => setOpenModal(false)}>{cancelText}</ButtonAnimated>
                    <ButtonAnimated confirm onPress={() => async () => {
                        onConfirm()

                        setOpenModal(false)

                        Toast.show({
                            type: toastType,
                            text1: toastMessage,
                            onPress() {
                                Toast.hide()
                            }
                        })
                    }}>{rightOption}</ButtonAnimated>
                </ContainerButtons>
            </Container>
        </Modal>
    )
}

export default ModalConfirm