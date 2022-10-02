import { Dispatch, SetStateAction, FC } from 'react'
import useSecrets from '../../../contexts/secretsContext'
import { useNavigation } from '@react-navigation/native'
import { Container, Title, Buttons, ButtonCancel, TextButtonCancel, ButtonDelete, TextButtonDelete } from './style'
import Toast from 'react-native-toast-message'

interface Iprops {
    id: string
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalDelete: FC<Iprops> = ({ id, setOpenModal }) => {
    const { deleteSecret } = useSecrets()
    const navigation = useNavigation()

    return (
        <Container>
            <Title>Deseja deletar esse segredo?</Title>
            <Buttons>
                <ButtonCancel activeOpacity={0.5} onPress={() => setOpenModal(false)}>
                    <TextButtonCancel>Cancelar</TextButtonCancel>
                </ButtonCancel>
                <ButtonDelete activeOpacity={0.5} onPress={async () => {
                    await deleteSecret(id)

                    setOpenModal(false)

                    navigation.navigate('Home')

                    Toast.show({
                        text1: 'Segredo deletado com sucesso!',
                        type: 'error',
                        onPress() {
                            Toast.hide()
                        }
                    })
                }}>
                    <TextButtonDelete>Deletar</TextButtonDelete>
                </ButtonDelete>
            </Buttons>
        </Container>
    )
}

export default ModalDelete