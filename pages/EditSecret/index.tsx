import { useRoute, useNavigation } from '@react-navigation/native'
import { IParams } from './types'
import { useSecret } from '../../contexts/secretsContext'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Value, ButtonSubmit, TextButtonSubmit } from './style'
import Loading from '../../components/Loading'
import Modal from 'react-native-modal'
import ModalSave from './ModalSave'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'

function Secret() {
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const navigation = useNavigation()
    const [value, setValue] = useState('')
    const theme = useTheme()
    const { securityConfiguration } = useSecurityConfiguration()
    const [openModalSave, setOpenModalSave] = useState(false)
    const [openModalVerify, setOpenModalVerify] = useState<string | null>()

    useEffect(() => secret && setValue(secret.value), [secret])

    function handleSubmit() {
        securityConfiguration.verifyPasswordWhenEditSecret ? setOpenModalVerify(secret.id) : setOpenModalSave(true)
    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ContainerPd>
                <HeaderBack onClick={() => navigation.goBack()} title="Editar segredo"/>
                {secret ? <>
                    <Value
                        autoFocus
                        multiline
                        value={value}
                        placeholder="Valor..."
                        onChangeText={setValue}
                        selectionColor={theme.primary}
                        placeholderTextColor={theme.primary}
                    />
                    <ButtonSubmit disabled={secret.value === value} onPress={handleSubmit}>
                        <TextButtonSubmit disabled={secret.value === value}>Salvar</TextButtonSubmit>
                    </ButtonSubmit>
                </> : <Loading/>}
                <Modal
                    isVisible={openModalSave}
                    onBackdropPress={() => setOpenModalSave(false)}
                    onBackButtonPress={() => setOpenModalSave(false)}
                >
                    <ModalSave secret={{ ...secret, value }} setOpenModal={setOpenModalSave}/>
                </Modal>
                <Modal
                    isVisible={openModalVerify ? true : false}
                    onBackdropPress={() => setOpenModalVerify(null)}
                    onBackButtonPress={() => setOpenModalVerify(null)}
                >
                    <ModalVerifyPassword hideToastFinal id={id} onSubmit={() => setOpenModalSave(true)} setOpenModal={setOpenModalVerify}/>
                </Modal>
            </ContainerPd>
        </TouchableWithoutFeedback>
    )
}

export default Secret