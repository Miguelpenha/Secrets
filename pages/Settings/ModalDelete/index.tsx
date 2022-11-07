import { Dispatch, SetStateAction, FC } from 'react'
import { Container, TitleModalDeleteAll, DataModalDeleteAll, FooterModalDeleteAll, ButtonCancelModalDeleteAll, TextButtonCancelModalDeleteAll, ButtonSubmitModalDeleteAll, TextButtonSubmitModalDeleteAll } from './style'
import { View } from 'react-native'
import usePassword from '../../../contexts/passwordContext'
import useTheme from '../../../theme'
import useShowEmoji from '../../../contexts/emojiContext'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { yellow, red } from '../../../utils/colorsLogs'
import Toast from 'react-native-toast-message'
import useHideSecretOnShow from '../../../contexts/hideSecretOnShowContext'
import useShowPageTitle from '../../../contexts/showPageTitleContext'
import useSecurityConfiguration from '../../../contexts/securityConfigurationContext'
import useSecrets from '../../../contexts/secretsContext'

interface Iprops {
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalDelete: FC<Iprops> = ({ setOpenModal }) => {
    const { loadPassword, password } = usePassword()
    const { loadTheme } = useTheme()
    const { loadShowEmoji } = useShowEmoji()
    const { loadSecurityConfiguration } = useSecurityConfiguration()
    const { loadShowPageTitle } = useShowPageTitle()
    const { loadHideSecretOnShow } = useHideSecretOnShow()
    const { loadSecrets } = useSecrets()
    const navigation = useNavigation()

    return (
        <Container>
            <TitleModalDeleteAll>Apagar todos os dados?</TitleModalDeleteAll>
            <View>
                <DataModalDeleteAll>@secrets:password</DataModalDeleteAll>
                <DataModalDeleteAll>@secrets:securityConfiguration</DataModalDeleteAll>
                <DataModalDeleteAll>@secrets:theme</DataModalDeleteAll>
                <DataModalDeleteAll>@secrets:secrets</DataModalDeleteAll>
                <DataModalDeleteAll>@secrets:showEmoji</DataModalDeleteAll>
                <DataModalDeleteAll>@secrets:hideSecretOnShow</DataModalDeleteAll>
                <DataModalDeleteAll>@secrets:showPageTitle</DataModalDeleteAll>
            </View>
            <FooterModalDeleteAll>
            <ButtonCancelModalDeleteAll onPress={() => setOpenModal(false)}>
                <TextButtonCancelModalDeleteAll>Cancelar</TextButtonCancelModalDeleteAll>
            </ButtonCancelModalDeleteAll>
            <ButtonSubmitModalDeleteAll onPress={() => {
                setOpenModal(false)

                AsyncStorage.removeItem('@secrets:password').then(() => {
                    AsyncStorage.removeItem('@secrets:securityConfiguration').then(() => {
                        AsyncStorage.removeItem('@secrets:theme').then(() => {
                            AsyncStorage.removeItem('@secrets:secrets').then(() => {
                                AsyncStorage.removeItem('@secrets:showEmoji').then(() => {
                                    AsyncStorage.removeItem('@secrets:hideSecretOnShow').then(async () => {
                                        AsyncStorage.removeItem('@secrets:showPageTitle').then(async () => {
                                            console.log(yellow('>> All data has been deleted'))
                                            console.log(red('   >> @secrets:password'))
                                            console.log(red('   >> @secrets:securityConfiguration'))
                                            console.log(red('   >> @secrets:theme'))
                                            console.log(red('   >> @secrets:secrets'))
                                            console.log(red('   >> @secrets:showEmoji'))
                                            console.log(red('   >> @secrets:hideSecretOnShow'))
                
                                            Toast.show({
                                                type: 'error',
                                                text1: 'Dados Apagados'
                                            })
                
                                            await loadPassword()
                                            await loadTheme()
                                            await loadHideSecretOnShow()
                                            await loadShowPageTitle()
                                            await loadShowEmoji()
                                            await loadSecurityConfiguration()
                                            await loadSecrets()
                                            
                                            !password && navigation.goBack()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }}>
                <TextButtonSubmitModalDeleteAll>Apagar</TextButtonSubmitModalDeleteAll>
            </ButtonSubmitModalDeleteAll>
            </FooterModalDeleteAll>
        </Container>
    )
}

export default ModalDelete