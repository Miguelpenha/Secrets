import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../theme'
import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { ContainerSwitch, TextSwitch, EmojiTextSwitch, Switch, Button, IconButton, IconUpdateButton, TextButton, Version, ContainerPoweredBy, TextPoweredBy, TextPoweredByName } from './style'
import checkUpdate from './checkUpdate'
import Constants from 'expo-constants'
import { blue, magenta } from '../../utils/colorsLogs'
import useShowEmoji from '../../contexts/emojiContext'
import useHideSecretOnShow from '../../contexts/hideSecretOnShowContext'
import Modal from 'react-native-modal'
import ModalDelete from './ModalDelete'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import usePassword from '../../contexts/passwordContext'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'

function Settings() {
    const navigation = useNavigation()
    const { theme, themeName, mutateTheme } = useTheme()
    const [checkUpdating, setCheckUpdating] = useState(false)
    const { showEmoji, setShowEmoji } = useShowEmoji()
    const { hideSecretOnShow, setHideSecretOnShow } = useHideSecretOnShow()
    const { password } = usePassword()
    const { securityConfiguration } = useSecurityConfiguration()
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalVerifyPasswordOnChangePassword, setOpenModalVerifyPasswordOnChangePassword] = useState<string | null>()
    const [openModalVerifyPasswordOnSecurity, setOpenModalVerifyPasswordOnSecurity] = useState<string | null>()
    
    return (
        <ContainerPd scroll>
            <HeaderBack onClick={() => navigation.goBack()} title="Configurações"/>
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
            <Button onPress={() => setOpenModalDelete(true)}>
                <IconButton name="delete" size={30}/>
                <TextButton>Apagar dados</TextButton>
            </Button>
            {password && <>
                <Button onPress={() => {
                    securityConfiguration.verifyPasswordWhenSecurityConfiguration ? setOpenModalVerifyPasswordOnSecurity('true') : navigation.navigate('Security')
                }}>
                    <IconButton name="lock" size={30}/>
                    <TextButton>Segurança</TextButton>
                    <IconButton right name="arrow-forward-ios" size={25}/>
                </Button>
                <Button onPress={() => securityConfiguration.verifyPasswordWhenChangePassword ? setOpenModalVerifyPasswordOnChangePassword('true') : navigation.navigate('Password', {
                    initial: false
                })}>
                    <IconButton name="vpn-key" size={30}/>
                    <TextButton>Mudar senha</TextButton>
                    <IconButton right name="arrow-forward-ios" size={25}/>
                </Button>
            </>}
            <Button disabled={checkUpdating} onPress={async () => checkUpdate(setCheckUpdating)} loading={checkUpdating}>
                <IconUpdateButton checkUpdating={checkUpdating} name="sync" size={30}/>
                <TextButton>Verificar atualizações</TextButton>
            </Button>
            <Version top={password ? 12 : 45}>Versão {Constants.manifest.version}</Version>
            <ContainerPoweredBy>
                <TextPoweredBy>Powered by</TextPoweredBy>
                <TextPoweredByName>Miguel da Penha</TextPoweredByName>
            </ContainerPoweredBy>
            <Modal
                isVisible={openModalDelete}
                onBackdropPress={() => setOpenModalDelete(false)}
                onBackButtonPress={() => setOpenModalDelete(false)}
            >
                <ModalDelete setOpenModal={setOpenModalDelete}/>
            </Modal>
            <Modal
                isVisible={openModalVerifyPasswordOnChangePassword ? true : false }
                onBackdropPress={() => setOpenModalVerifyPasswordOnChangePassword(null)}
                onBackButtonPress={() => setOpenModalVerifyPasswordOnChangePassword(null)}
            >
                <ModalVerifyPassword
                    hideToastFinal
                    setOpenModal={setOpenModalVerifyPasswordOnChangePassword}
                    onSubmit={() => navigation.navigate('Password', {
                        initial: false
                    })}
                />
            </Modal>
            <Modal
                isVisible={openModalVerifyPasswordOnSecurity ? true : false }
                onBackdropPress={() => setOpenModalVerifyPasswordOnSecurity(null)}
                onBackButtonPress={() => setOpenModalVerifyPasswordOnSecurity(null)}
            >
                <ModalVerifyPassword
                    hideToastFinal
                    setOpenModal={setOpenModalVerifyPasswordOnSecurity}
                    onSubmit={() => navigation.navigate('Security')}
                />
            </Modal>
        </ContainerPd>
    )
}

export default Settings