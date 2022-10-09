import { useRoute, useNavigation } from '@react-navigation/native'
import { useSecret } from '../../contexts/secretsContext'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Value, ContainerSwitch, TextSwitch, ButtonSubmit, TextButtonSubmit } from './style'
import { Switch } from 'react-native'
import Loading from '../../components/Loading'
import Modal from 'react-native-modal'
import ModalSave from './ModalSave'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import usePassword from '../../contexts/passwordContext'

interface IParams {
    id: string
}

function Secret() {
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const navigation = useNavigation()
    const [value, setValue] = useState('')
    const theme = useTheme()
    const [secure, setSecure] = useState(false)
    const { password } = usePassword()
    const [hideIcon, setHideIcon] = useState(false)
    const [hideName, setHideName] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const { securityConfiguration } = useSecurityConfiguration()
    const [openModalSave, setOpenModalSave] = useState(false)
    const [openModalVerify, setOpenModalVerify] = useState<string | null>()

    useEffect(() => {
        if (secret) {
            setValue(secret.value)
            setSecure(secret.secure)
            setHideIcon(secret.hideIcon)
            setHideName(secret.hideName)
        }
    }, [secret])

    function handleSubmit() {
        securityConfiguration.verifyPasswordWhenEditSecret ? setOpenModalVerify(secret.id) : setOpenModalSave(true)
    }

    useEffect(() => {
        if (secret) {
            if (secret.value === value && secret.hideIcon === hideIcon && secret.hideName === hideName && secret.secure === secure) {
                setDisabledSubmit(true)
            } else {
                setDisabledSubmit(false)
            }
        }
    }, [value, secure, hideIcon, hideName, secret])
    
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
                    <ContainerSwitch>
                        <TextSwitch>Seguro</TextSwitch>
                        <Switch
                            value={secure}
                            onChange={() => {
                                setSecure(!secure)
                                !secure && setHideIcon(true)
                                !secure && setHideName(true)
                            }}
                            thumbColor={secure ? theme.primary : theme.primary}
                            trackColor={{false: theme.secondary, true: theme.primary}}
                        />
                    </ContainerSwitch>
                    <ContainerSwitch>
                        <TextSwitch>Esconder ícone</TextSwitch>
                        <Switch
                            value={hideIcon}
                            onChange={() => setHideIcon(!hideIcon)}
                            thumbColor={hideIcon ? theme.primary : theme.primary}
                            trackColor={{false: theme.secondary, true: theme.primary}}
                        />
                    </ContainerSwitch>
                    <ContainerSwitch>
                        <TextSwitch>Esconder nome</TextSwitch>
                        <Switch
                            value={hideName}
                            onChange={() => setHideName(!hideName)}
                            thumbColor={hideName ? theme.primary : theme.primary}
                            trackColor={{false: theme.secondary, true: theme.primary}}
                        />
                    </ContainerSwitch>
                    <ButtonSubmit disabled={disabledSubmit} onPress={handleSubmit}>
                        <TextButtonSubmit disabled={disabledSubmit}>Salvar</TextButtonSubmit>
                    </ButtonSubmit>
                </> : <Loading/>}
                <Modal
                    isVisible={openModalSave}
                    onBackdropPress={() => setOpenModalSave(false)}
                    onBackButtonPress={() => setOpenModalSave(false)}
                >
                    <ModalSave secret={{ ...secret, value, secure, hideIcon, hideName, password: secure && password }} setOpenModal={setOpenModalSave}/>
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