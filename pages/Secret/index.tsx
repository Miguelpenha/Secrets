import { useRoute, useNavigation } from '@react-navigation/native'
import { IParams } from './types'
import { useSecret } from '../../contexts/secretsContext'
import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import limitText from '../../utils/limitText'
import { Header, Icon, ContainerValue, Value } from './style'
import ButtonHeaderAnimated from './ButtonHeaderAnimated'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'
import ButtonShareAnimated from './ButtonShareAnimated'
import Loading from '../../components/Loading'
import Modal from 'react-native-modal'
import ModalDelete from './ModalDelete'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'
import useHideSecretOnShow from '../../contexts/hideSecretOnShowContext'
import { Share } from 'react-native'
import { ScrollView } from 'react-native'

function Secret() {
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const navigation = useNavigation()
    const { securityConfiguration } = useSecurityConfiguration()
    const { hideSecretOnShow } = useHideSecretOnShow()
    const [visibility, setVisibility] = useState(!hideSecretOnShow)
    const [openModalVerifyDelete, setOpenModalVerifyDelete] = useState<string | null>()
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalVerifyShare, setOpenModalVerifyShare] = useState<string | null>()
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title={secret && limitText(`${secret.name} (${secret.type})`, 25)}/>
            {secret ? <>
                <ScrollView>
                    <Header>
                        <ButtonHeaderAnimated
                            icon="delete"
                            onPress={() => (secret.secure && securityConfiguration.verifyPasswordWhenDeleteSecret) ? setOpenModalVerifyDelete(id) : setOpenModalDelete(true)}
                        />
                        <ButtonHeaderAnimated
                            onPress={() => setVisibility(!visibility)}
                            icon={`visibility${visibility ? '' : '-off'}`}
                        />
                        <ButtonHeaderAnimated
                            icon="edit"
                            onPress={() => navigation.navigate('EditSecret', { id: secret.id })}
                        />
                    </Header>
                    <Icon name={visibility ? secret.icon : 'lock'} size={35}/>
                    <ContainerValue activeOpacity={0.4} onPress={() => {
                        Clipboard.setString(secret.value)

                        Toast.show({
                            text1: 'Segredo copiado!',
                            type: 'success',
                            onPress() {
                                Toast.hide()
                            }
                        })
                    }}>
                        <Value editable={false} multiline={visibility} secureTextEntry={!visibility}>{secret.value}</Value>
                    </ContainerValue>
                </ScrollView>
                <ButtonShareAnimated onPress={async () => (secret.secure && securityConfiguration.verifyPasswordWhenShareSecret) ? setOpenModalVerifyShare(id) : await Share.share({
                        title: secret.name,
                        message: secret.value
                    }, {
                        dialogTitle: secret.name
                })}/>
            </> : <Loading/>}
            <Modal
                isVisible={openModalDelete}
                onBackdropPress={() => setOpenModalDelete(false)}
                onBackButtonPress={() => setOpenModalDelete(false)}
            >
                <ModalDelete id={id} setOpenModal={setOpenModalDelete}/>
            </Modal>
            <Modal
                isVisible={openModalVerifyDelete ? true : false}
                onBackdropPress={() => setOpenModalVerifyDelete(null)}
                onBackButtonPress={() => setOpenModalVerifyDelete(null)}
            >
                <ModalVerifyPassword hideToastFinal id={id} onSubmit={() => setOpenModalDelete(true)} setOpenModal={setOpenModalVerifyDelete}/>
            </Modal>
            <Modal
                isVisible={openModalVerifyShare ? true : false}
                onBackdropPress={() => setOpenModalVerifyShare(null)}
                onBackButtonPress={() => setOpenModalVerifyShare(null)}
            >
                <ModalVerifyPassword hideToastFinal id={id} onSubmit={() => setTimeout(async () => {
                    await Share.share({
                        title: secret.name,
                        message: secret.value
                    }, {
                        dialogTitle: secret.name
                    })
                }, 150)} setOpenModal={setOpenModalVerifyShare}/>
            </Modal>
        </ContainerPd>
    )
}

export default Secret