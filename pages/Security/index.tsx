import { useNavigation } from '@react-navigation/native'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Section, ContainerSwitch, TextSwitch, ButtonSubmit, TextButtonSubmit } from './style'
import { Switch } from 'react-native'
import Modal from 'react-native-modal'
import ModalSave from './ModalSave'

function Security() {
    const navigation = useNavigation()
    const { securityConfiguration } = useSecurityConfiguration()
    const [verifyPasswordWhenDeleteSecret, setVerifyPasswordWhenDeleteSecret] = useState(securityConfiguration.verifyPasswordWhenDeleteSecret)
    const [verifyPasswordWhenEditSecret, setVerifyPasswordWhenEditSecret] = useState(securityConfiguration.verifyPasswordWhenEditSecret)
    const [verifyPasswordWhenChangePassword, setVerifyPasswordWhenChangePassword] = useState(securityConfiguration.verifyPasswordWhenChangePassword)
    const [verifyPasswordWhenSecurityConfiguration, setVerifyPasswordWhenSecurityConfiguration] = useState(securityConfiguration.verifyPasswordWhenSecurityConfiguration)
    const theme = useTheme()
    const [openModalSave, setOpenModalSave] = useState(false)

    return (
        <ContainerPd>
            <HeaderBack title="Segurança" onClick={() => navigation.goBack()}/>
            <Section>Verificar senha quando</Section>
            <ContainerSwitch>
                <TextSwitch>Editar segredo</TextSwitch>
                <Switch
                    value={verifyPasswordWhenEditSecret}
                    thumbColor={theme.primary}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenEditSecret(!verifyPasswordWhenEditSecret)
                    }
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Deletar segredo</TextSwitch>
                <Switch
                    value={verifyPasswordWhenDeleteSecret}
                    thumbColor={theme.primary}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenDeleteSecret(!verifyPasswordWhenDeleteSecret)
                    }
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Mudar senha</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenChangePassword}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenChangePassword(!verifyPasswordWhenChangePassword)
                    }
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Configurar segurança</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenSecurityConfiguration}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenSecurityConfiguration(!verifyPasswordWhenSecurityConfiguration)
                    }
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
                <ModalSave
                    setOpenModal={setOpenModalSave}
                    securityConfiguration={{
                        verifyPasswordWhenEditSecret,
                        verifyPasswordWhenDeleteSecret,
                        verifyPasswordWhenChangePassword,
                        verifyPasswordWhenSecurityConfiguration
                    }}
                />
            </Modal>
        </ContainerPd>
    )
}

export default Security