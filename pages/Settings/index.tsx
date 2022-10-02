import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../theme'
import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { ScrollView } from 'react-native'
import { ContainerSwitch, TextSwitch, EmojiTextSwitch, Switch, Button, IconButton, IconUpdateButton, TextButton, Version, ContainerPoweredBy, TextPoweredBy, TextPoweredByName } from './style'
import checkUpdate from './checkUpdate'
import Constants from 'expo-constants'
import { blue, magenta } from '../../utils/colorsLogs'
import useShowEmoji from '../../contexts/emojiContext'
import Modal from 'react-native-modal'
import ModalDelete from './ModalDelete'

function Settings() {
    const navigation = useNavigation()
    const { theme, themeName, mutateTheme } = useTheme()
    const [checkUpdating, setCheckUpdating] = useState(false)
    const { showEmoji, setShowEmoji } = useShowEmoji()
    const [openModalDelete, setOpenModalDelete] = useState(false)
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title="Configurações"/>
            <ScrollView>
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
                            showEmoji ? setShowEmoji(false) : setShowEmoji(true)
                            
                            console.log(blue(`>> ShowEmoji changed`))
                            console.log(magenta(`   >> ${showEmoji ? 'Not Show emoji' : 'Show emoji'}`))
                        }}
                    />
                </ContainerSwitch>
                <Button onPress={() => setOpenModalDelete(true)}>
                    <IconButton name="delete" size={30}/>
                    <TextButton>Apagar dados</TextButton>
                </Button>
                <Button disabled={checkUpdating} onPress={async () => checkUpdate(setCheckUpdating)} loading={checkUpdating}>
                    <IconUpdateButton checkUpdating={checkUpdating} name="sync" size={30}/>
                    <TextButton>Verificar atualizações</TextButton>
                </Button>
            </ScrollView>
            <Version>Versão {Constants.manifest.version}</Version>
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
        </ContainerPd>
    )
}

export default Settings