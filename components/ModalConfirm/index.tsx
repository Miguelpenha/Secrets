import { Dispatch, SetStateAction, FC } from 'react'
import Modal from 'react-native-modal'
import { Container, Title, ContainerButtons } from './style'
import Toast from 'react-native-toast-message'
import ButtonAnimated from './ButtonAnimated'

interface Iprops {
    title?: string
    openModal: boolean
    cancelText?: string
    confirmText?: string
    toastMessage: string
    onConfirm: () => void
    toastType?: 'success' | 'info' | 'error'
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalConfirm: FC<Iprops> = ({ openModal, setOpenModal, title, cancelText='Cancelar', onConfirm, toastType='error', toastMessage, confirmText='Deletar' }) => {
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
                    <ButtonAnimated confirm onPress={async () => {
                        setOpenModal(false)

                        setTimeout(() => {
                            onConfirm()

                            Toast.show({
                                type: toastType,
                                text1: toastMessage,
                                onPress() {
                                    Toast.hide()
                                }
                            })
                        }, 250)
                    }}>{confirmText}</ButtonAnimated>
                </ContainerButtons>
            </Container>
        </Modal>
    )
}

export default ModalConfirm