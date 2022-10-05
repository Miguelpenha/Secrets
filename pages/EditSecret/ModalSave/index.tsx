import { ISecret } from '../../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import useSecrets from '../../../contexts/secretsContext'
import { useNavigation } from '@react-navigation/native'
import { Container, Title, Buttons, ButtonCancel, TextButtonCancel, ButtonDelete, TextButtonDelete } from './style'
import Toast from 'react-native-toast-message'

interface Iprops {
    secret: ISecret
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalSave: FC<Iprops> = ({ secret, setOpenModal }) => {
    const { editSecret } = useSecrets()
    const navigation = useNavigation()
    
    return (
        <Container>
            <Title>Deseja salvar essas alterações?</Title>
            <Buttons>
                <ButtonCancel activeOpacity={0.5} onPress={() => setOpenModal(false)}>
                    <TextButtonCancel>Cancelar</TextButtonCancel>
                </ButtonCancel>
                <ButtonDelete activeOpacity={0.5} onPress={async () => {
                    await editSecret(secret)

                    setOpenModal(false)

                    navigation.goBack()

                    Toast.show({
                        text1: 'Alterações salvas com sucesso!',
                        type: 'info',
                        onPress() {
                            Toast.hide()
                        }
                    })
                }}>
                    <TextButtonDelete>Salvar</TextButtonDelete>
                </ButtonDelete>
            </Buttons>
        </Container>
    )
}

export default ModalSave