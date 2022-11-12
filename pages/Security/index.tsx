import { useNavigation } from '@react-navigation/native'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Sections, Section, ContainerSwitch, TextSwitch, ButtonSubmit, TextButtonSubmit } from './style'
import { Switch } from 'react-native'
import ModalConfirm from '../../components/ModalConfirm'
import { blue, magenta } from '../../utils/colorsLogs'

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
    const [verifyPasswordWhenStatistics, setVerifyPasswordWhenStatistics] = useState(securityConfiguration.verifyPasswordWhenStatistics)
    const theme = useTheme()
    const [openModalSave, setOpenModalSave] = useState(false)
    const { setSecurityConfiguration } = useSecurityConfiguration()

    return (
        <ContainerPd>
            <HeaderBack title="Segurança" onClick={() => navigation.goBack()}/>
            <Sections contentContainerStyle={{paddingBottom: '30%'}}>
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
                <ContainerSwitch>
                    <TextSwitch>Estatísticas</TextSwitch>
                    <Switch
                        thumbColor={theme.primary}
                        value={verifyPasswordWhenStatistics}
                        trackColor={{false: theme.secondary, true: theme.primary}}
                        onChange={() => 
                            setVerifyPasswordWhenStatistics(!verifyPasswordWhenStatistics)
                        }
                    />
                </ContainerSwitch>
            </Sections>
            <ButtonSubmit onPress={() => setOpenModalSave(true)}>
                <TextButtonSubmit>Salvar</TextButtonSubmit>
            </ButtonSubmit>
            <ModalConfirm
                toastType="success"
                confirmText="Salvar"
                openModal={openModalSave}
                setOpenModal={setOpenModalSave}
                title="Deseja salvar essas alterações?"
                toastMessage="Alterações salvas com sucesso!"
                onConfirm={() => {
                    setSecurityConfiguration({
                        verifyPasswordWhenStatistics,
                        verifyPasswordWhenDeleteData,
                        verifyPasswordWhenEditSecret,
                        verifyPasswordWhenShareSecret,
                        verifyPasswordWhenDeleteSecret,
                        verifyPasswordWhenExportSecrets,
                        verifyPasswordWhenImportSecrets,
                        verifyPasswordWhenChangePassword,
                        verifyPasswordWhenSecurityConfiguration
                    })

                    console.log(blue(`>> Security configuration changed`))
                    console.log(magenta(`   >> verifyPasswordWhenStatistics ${blue(String(verifyPasswordWhenStatistics))}`))
                    console.log(magenta(`   >> verifyPasswordWhenDeleteData ${blue(String(verifyPasswordWhenDeleteData))}`))
                    console.log(magenta(`   >> verifyPasswordWhenEditSecret ${blue(String(verifyPasswordWhenEditSecret))}`))
                    console.log(magenta(`   >> verifyPasswordWhenShareSecret ${blue(String(verifyPasswordWhenShareSecret))}`))
                    console.log(magenta(`   >> verifyPasswordWhenDeleteSecret ${blue(String(verifyPasswordWhenDeleteSecret))}`))
                    console.log(magenta(`   >> verifyPasswordWhenExportSecrets ${blue(String(verifyPasswordWhenExportSecrets))}`))
                    console.log(magenta(`   >> verifyPasswordWhenImportSecrets ${blue(String(verifyPasswordWhenImportSecrets))}`))
                    console.log(magenta(`   >> verifyPasswordWhenChangePassword ${blue(String(verifyPasswordWhenChangePassword))}`))
                    console.log(magenta(`   >> verifyPasswordWhenSecurityConfiguration ${blue(String(verifyPasswordWhenSecurityConfiguration))}`))

                    navigation.goBack()
                }}
            />
        </ContainerPd>
    )
}

export default Security