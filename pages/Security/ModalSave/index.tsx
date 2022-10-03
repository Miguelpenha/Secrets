import { Dispatch, SetStateAction, FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Title, Buttons, ButtonCancel, TextButtonCancel, ButtonSave, TextButtonSave } from './style'
import Toast from 'react-native-toast-message'

interface Iprops {
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalSave: FC<Iprops> = ({ setOpenModal }) => {
    const navigation = useNavigation()

    return (
        <Container>
            <Title>Deseja salvar essas alterações?</Title>
            <Buttons>
                <ButtonCancel activeOpacity={0.5} onPress={() => setOpenModal(false)}>
                    <TextButtonCancel>Cancelar</TextButtonCancel>
                </ButtonCancel>
                <ButtonSave activeOpacity={0.5} onPress={async () => {
                    setOpenModal(false)

                    navigation.navigate('Home')

                    Toast.show({
                        text1: 'Alterações salvas com sucesso!',
                        type: 'success',
                        onPress() {
                            Toast.hide()
                        }
                    })
                }}>
                    <TextButtonSave>Salvar</TextButtonSave>
                </ButtonSave>
            </Buttons>
        </Container>
    )
}

export default memo(ModalSave)