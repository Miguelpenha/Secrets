import { FC, Dispatch, SetStateAction } from 'react'
import { useTheme } from '../../../theme/index'
import ModalConfirm from '../../../components/ModalConfirm'
import useShowEmoji from '../../../contexts/emojiContext'
import useHideSecretOnShow from '../../../contexts/hideSecretOnShowContext'
import usePassword from '../../../contexts/passwordContext'
import useSecrets from '../../../contexts/secretsContext'
import useSecurityConfiguration from '../../../contexts/securityConfigurationContext'
import useShowPageTitle from '../../../contexts/showPageTitleContext'
import useTypes from '../../../contexts/typesContext'
import { useNavigation } from '@react-navigation/native'
import data from './data'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { red, yellow } from '../../../utils/colorsLogs'
import Toast from 'react-native-toast-message'

interface Iprops {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalDelete: FC<Iprops> = ({ openModal, setOpenModal }) => {
    const { loadPassword, password } = usePassword()
    const { loadTheme } = useTheme()
    const { loadShowEmoji } = useShowEmoji()
    const { loadSecurityConfiguration } = useSecurityConfiguration()
    const { loadShowPageTitle } = useShowPageTitle()
    const { loadHideSecretOnShow } = useHideSecretOnShow()
    const { loadSecrets } = useSecrets()
    const navigation = useNavigation()

    return (
        <ModalConfirm
            data={data}
            confirmText="Apagar"
            openModal={openModal}
            setOpenModal={setOpenModal}
            toastMessage="Dados Apagados"
            title="Apagar todos os dados?"
            onConfirm={() => {
                AsyncStorage.removeItem('@secrets:password').then(() => {
                    AsyncStorage.removeItem('@secrets:securityConfiguration').then(() => {
                        AsyncStorage.removeItem('@secrets:theme').then(() => {
                            AsyncStorage.removeItem('@secrets:secrets').then(() => {
                                AsyncStorage.removeItem('@secrets:showEmoji').then(() => {
                                    AsyncStorage.removeItem('@secrets:hideSecretOnShow').then(() => {
                                        AsyncStorage.removeItem('@secrets:types').then(() => {
                                            AsyncStorage.removeItem('@secrets:showPageTitle').then(() => {
                                                AsyncStorage.removeItem('@secrets:statistic').then(async () => {
                                                    console.log(yellow('>> All data has been deleted'))
                                                    console.log(red('   >> @secrets:password'))
                                                    console.log(red('   >> @secrets:securityConfiguration'))
                                                    console.log(red('   >> @secrets:theme'))
                                                    console.log(red('   >> @secrets:types'))
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
                    })
                })
            }}
        />
    )
}

export default ModalDelete