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
    const [verifyPasswordWhenDeleteData, setVerifyPasswordWhenDeleteData] = useState(securityConfiguration.verifyPasswordWhenDeleteData)
    const [verifyPasswordWhenShareSecret, setVerifyPasswordWhenShareSecret] = useState(securityConfiguration.verifyPasswordWhenShareSecret)
    const [verifyPasswordWhenDeleteSecret, setVerifyPasswordWhenDeleteSecret] = useState(securityConfiguration.verifyPasswordWhenDeleteSecret)
    const [verifyPasswordWhenExportSecrets, setVerifyPasswordWhenExportSecrets] = useState(securityConfiguration.verifyPasswordWhenExportSecrets)
    const [verifyPasswordWhenImportSecrets, setVerifyPasswordWhenImportSecrets] = useState(securityConfiguration.verifyPasswordWhenImportSecrets)
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
                <TextSwitch>Apagar dados</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenDeleteData}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenDeleteData(!verifyPasswordWhenDeleteData)
                    }
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Editar segredo</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenEditSecret}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenEditSecret(!verifyPasswordWhenEditSecret)
                    }
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Compartilhar segredo</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenShareSecret}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenShareSecret(!verifyPasswordWhenShareSecret)
                    }
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Deletar segredo</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenDeleteSecret}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenDeleteSecret(!verifyPasswordWhenDeleteSecret)
                    }
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Exportar segredos</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenExportSecrets}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenExportSecrets(!verifyPasswordWhenExportSecrets)
                    }
                />
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Importar segredos</TextSwitch>
                <Switch
                    thumbColor={theme.primary}
                    value={verifyPasswordWhenImportSecrets}
                    trackColor={{false: theme.secondary, true: theme.primary}}
                    onChange={() => 
                        setVerifyPasswordWhenImportSecrets(!verifyPasswordWhenImportSecrets)
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
                        verifyPasswordWhenDeleteData,
                        verifyPasswordWhenEditSecret,
                        verifyPasswordWhenShareSecret,
                        verifyPasswordWhenDeleteSecret,
                        verifyPasswordWhenExportSecrets,
                        verifyPasswordWhenImportSecrets,
                        verifyPasswordWhenChangePassword,
                        verifyPasswordWhenSecurityConfiguration
                    }}
                />
            </Modal>
        </ContainerPd>
    )
}

export default Security