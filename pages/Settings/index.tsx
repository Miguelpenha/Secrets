import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../theme'
import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { ContainerOptions, ContainerSwitch, TextSwitch, EmojiTextSwitch, Switch, Version, ContainerPoweredBy, TextPoweredBy, TextPoweredByName } from './style'
import ButtonAnimated from './ButtonAnimated'
import checkUpdate from './checkUpdate'
import Constants from 'expo-constants'
import { blue, magenta } from '../../utils/colorsLogs'
import useShowEmoji from '../../contexts/emojiContext'
import useHideSecretOnShow from '../../contexts/hideSecretOnShowContext'
import useShowPageTitle from '../../contexts/showPageTitleContext'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import usePassword from '../../contexts/passwordContext'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'
import * as Clipboard from 'expo-clipboard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import ModalImportSecrets from './ModalImportSecrets'
import ModalDelete from './ModalDelete'
import useSecrets from '../../contexts/secretsContext'

function Settings() {
    const navigation = useNavigation()
    const { theme, themeName, mutateTheme } = useTheme()
    const [checkUpdating, setCheckUpdating] = useState(false)
    const { showEmoji, setShowEmoji } = useShowEmoji()
    const { hideSecretOnShow, setHideSecretOnShow } = useHideSecretOnShow()
    const { showPageTitle, setShowPageTitle } = useShowPageTitle()
    const { password } = usePassword()
    const { securityConfiguration } = useSecurityConfiguration()
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const { secrets } = useSecrets()
    const [openModalVerifyPasswordOnChangePassword, setOpenModalVerifyPasswordOnChangePassword] = useState<string | null>()
    const [openModalVerifyPasswordOnDeleteData, setOpenModalVerifyPasswordOnDeleteData] = useState<string | null>()
    const [openModalVerifyPasswordOnSecurity, setOpenModalVerifyPasswordOnSecurity] = useState<string | null>()
    const [openModalVerifyPasswordOnStatistics, setOpenModalVerifyPasswordOnStatistics] = useState<string | null>()
    const [openModalVerifyPasswordOnExportSecrets, setOpenModalVerifyPasswordOnExportSecrets] = useState<string | null>()
    const [openModalVerifyPasswordOnImportSecrets, setOpenModalVerifyPasswordOnImportSecrets] = useState<string | null>()
    const [openModalImportSecrets, setOpenModalImportSecrets] = useState<boolean>()

    async function handleExportSecrets() {
        Clipboard.setString(JSON.stringify(secrets))
        
        Toast.show({
            text1: 'Exporta????o copiada para ??rea de transfer??ncia'
        })
    }

    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title="Configura????es"/>
            <ContainerOptions>
                <ContainerSwitch>
                    <TextSwitch>Tema escuro</TextSwitch>
                    <Switch
                        value={themeName==='light' ? false : true}
                        thumbColor={themeName==='light' ? theme.primary : theme.primary}
                        trackColor={{false: theme.secondary, true: theme.primary}}
                        onChange={() => {
                            themeName==='light' ? mutateTheme('dark') : mutateTheme('light')
                            
                            console.log(blue(`>> Theme changed`))
                            console.log(magenta(`   >> ${themeName==='light' ? 'dark' : 'light'}`))
                        }}
                    />
                </ContainerSwitch>
                <ContainerSwitch>
                    <TextSwitch>Mostrar emojis {showEmoji && <EmojiTextSwitch>&#x1F914;</EmojiTextSwitch>}</TextSwitch>
                    <Switch
                        value={showEmoji}
                        thumbColor={showEmoji ? theme.primary : theme.primary}
                        trackColor={{false: theme.secondary, true: theme.primary}}
                        onChange={() => {
                            setShowEmoji(!showEmoji)
                            
                            console.log(blue(`>> ShowEmoji changed`))
                            console.log(magenta(`   >> ${showEmoji ? 'Not Show emoji' : 'Show emoji'}`))
                        }}
                    />
                </ContainerSwitch>
                <ContainerSwitch>
                    <TextSwitch>Esconder segredo</TextSwitch>
                    <Switch
                        value={hideSecretOnShow}
                        thumbColor={hideSecretOnShow ? theme.primary : theme.primary}
                        trackColor={{false: theme.secondary, true: theme.primary}}
                        onChange={() => {
                            setHideSecretOnShow(!hideSecretOnShow)
                            
                            console.log(blue(`>> HideSecretOnShow changed`))
                            console.log(magenta(`   >> ${hideSecretOnShow ? 'Not hide secret on show' : 'Hide secret on show'}`))
                        }}
                    />
                </ContainerSwitch>
                <ContainerSwitch>
                    <TextSwitch>Mostrar t??tulo da p??gina</TextSwitch>
                    <Switch
                        value={showPageTitle}
                        thumbColor={showPageTitle ? theme.primary : theme.primary}
                        trackColor={{false: theme.secondary, true: theme.primary}}
                        onChange={() => {
                            setShowPageTitle(!showPageTitle)
                            
                            console.log(blue(`>> ShowPageTitle changed`))
                            console.log(magenta(`   >> ${showPageTitle ? 'Hide page title' : 'Show page title'}`))
                        }}
                    />
                </ContainerSwitch>
                <ButtonAnimated icon="delete" onPress={() => securityConfiguration.verifyPasswordWhenDeleteData ? setOpenModalVerifyPasswordOnDeleteData('true') : setOpenModalDelete(true)}>Apagar dados</ButtonAnimated>
                {password && <>
                    <ButtonAnimated icon="lock" iconForward onPress={() => {
                        securityConfiguration.verifyPasswordWhenSecurityConfiguration ? setOpenModalVerifyPasswordOnSecurity('true') : navigation.navigate('Security')
                    }}>Seguran??a</ButtonAnimated>
                    <ButtonAnimated icon="insights" iconForward onPress={() => securityConfiguration.verifyPasswordWhenStatistics ? setOpenModalVerifyPasswordOnStatistics('true') : navigation.navigate('Statistics')}>Estat??sticas</ButtonAnimated>
                    <ButtonAnimated icon="vpn-key" iconForward onPress={() => securityConfiguration.verifyPasswordWhenChangePassword ? setOpenModalVerifyPasswordOnChangePassword('true') : navigation.navigate('Password', {
                        initial: false
                    })}>Mudar senha</ButtonAnimated>
                    <ButtonAnimated icon="file-upload" onPress={async () => securityConfiguration.verifyPasswordWhenExportSecrets ? setOpenModalVerifyPasswordOnExportSecrets('true') : await handleExportSecrets()}>Exportar segredos</ButtonAnimated>
                </>}
                <ButtonAnimated icon="file-download" onPress={() => securityConfiguration.verifyPasswordWhenImportSecrets ? setOpenModalVerifyPasswordOnImportSecrets('true') : setOpenModalImportSecrets(true)}>Importar segredos</ButtonAnimated>
                <ButtonAnimated
                    icon="sync"
                    loading={checkUpdating}
                    onPress={async () => checkUpdate(setCheckUpdating)}
                >
                    Verificar atualiza????es
                </ButtonAnimated>
                <Version top={password ? 12 : 45}>Vers??o {Constants.manifest.version}</Version>
                <ContainerPoweredBy>
                    <TextPoweredBy>Powered by</TextPoweredBy>
                    <TextPoweredByName>Miguel da Penha</TextPoweredByName>
                </ContainerPoweredBy>
            </ContainerOptions>
            <ModalDelete
                openModal={openModalDelete}
                setOpenModal={setOpenModalDelete}
            />
            <ModalVerifyPassword
                hideToastFinal
                openModal={openModalVerifyPasswordOnChangePassword}
                setOpenModal={setOpenModalVerifyPasswordOnChangePassword}
                onSubmit={() => navigation.navigate('Password', {
                    initial: false
                })}
            />
            <ModalVerifyPassword
                hideToastFinal
                openModal={openModalVerifyPasswordOnDeleteData}
                setOpenModal={setOpenModalVerifyPasswordOnDeleteData}
                onSubmit={() => setOpenModalDelete(true)}
            />
            <ModalVerifyPassword
                hideToastFinal
                openModal={openModalVerifyPasswordOnSecurity}
                setOpenModal={setOpenModalVerifyPasswordOnSecurity}
                onSubmit={() => navigation.navigate('Security')}
            />
            <ModalVerifyPassword
                hideToastFinal
                openModal={openModalVerifyPasswordOnStatistics}
                setOpenModal={setOpenModalVerifyPasswordOnStatistics}
                onSubmit={() => navigation.navigate('Statistics')}
            />
            <ModalVerifyPassword
                hideToastFinal
                onSubmit={handleExportSecrets}
                openModal={openModalVerifyPasswordOnExportSecrets}
                setOpenModal={setOpenModalVerifyPasswordOnExportSecrets}
            />
            <ModalVerifyPassword
                hideToastFinal
                onSubmit={() => setOpenModalImportSecrets(true)}
                openModal={openModalVerifyPasswordOnImportSecrets}
                setOpenModal={setOpenModalVerifyPasswordOnImportSecrets}
            />
            <ModalImportSecrets
                openModal={openModalImportSecrets}
                setOpenModal={setOpenModalImportSecrets}
            />
        </ContainerPd>
    )
}

export default Settings