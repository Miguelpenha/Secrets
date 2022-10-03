import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Section, ContainerSwitch, TextSwitch, ButtonSubmit, TextButtonSubmit } from './style'
import { Switch } from 'react-native'
import { blue, magenta } from '../../utils/colorsLogs'
import Modal from 'react-native-modal'
import ModalSave from './ModalSave'
import { ISecurity } from '../../types'

function Security() {
    const navigation = useNavigation()
    const [verifyPasswordWhenDeleteSecret, setVerifyPasswordWhenDeleteSecret] = useState(true)
    const [verifyPasswordWhenChangePassword, setVerifyPasswordWhenChangePassword] = useState(true)
    const [verifyPasswordWhenConfigureSecurity, setVerifyPasswordWhenConfigureSecurity] = useState(true)
    const theme = useTheme()
    const [openModalSave, setOpenModalSave] = useState(false)

    return (
        <ContainerPd>
            <HeaderBack title="Segurança" onClick={() => navigation.goBack()}/>
            <Section>Verificar senha quando</Section>
            <ContainerSwitch>
                <TextSwitch>Deletar segredo</TextSwitch>
                <Switch
                    value={verifyPasswordWhenDeleteSecret}
                    thumbColor={theme.primary}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => {
                        setVerifyPasswordWhenDeleteSecret(!verifyPasswordWhenDeleteSecret)
                        
                        console.log(blue(`>> Value of security changed`))
                        console.log(magenta(`   >> verifyPasswordWhenDeleteSecret ${blue(String(!verifyPasswordWhenDeleteSecret))}`))
                    }}
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Mudar senha</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenChangePassword}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => {
                        setVerifyPasswordWhenChangePassword(!verifyPasswordWhenChangePassword)
                        
                        console.log(blue(`>> Value of security changed`))
                        console.log(magenta(`   >> verifyPasswordWhenChangePassword ${blue(String(!verifyPasswordWhenChangePassword))}`))
                    }}
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Configurar segurança</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenConfigureSecurity}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => {
                        setVerifyPasswordWhenConfigureSecurity(!verifyPasswordWhenConfigureSecurity)
                        
                        console.log(blue(`>> Value of security changed`))
                        console.log(magenta(`   >> verifyPasswordWhenConfigureSecurity ${blue(String(!verifyPasswordWhenConfigureSecurity))}`))
                    }}
                />
            </ContainerSwitch>
            <ButtonSubmit onPress={() => setOpenModalSave(true)}>
                <TextButtonSubmit>Salvar</TextButtonSubmit>
            </ButtonSubmit>
            <Modal
                isVisible={openModalSave}
                onBackdropPress={() => setOpenModalSave(false)}
                onBackButtonPress={() => setOpenModalSave(false)}
            >
                <ModalSave setOpenModal={setOpenModalSave}/>
            </Modal>
        </ContainerPd>
    )
}

export default Security