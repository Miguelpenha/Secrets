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
import Loading from '../../components/Loading'
import Modal from 'react-native-modal'
import ModalDelete from './ModalDelete'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'

function Secret() {
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const navigation = useNavigation()
    const [visibility, setVisibility] = useState(true)
    const [openModalVerify, setOpenModalVerify] = useState<string | null>()
    const [openModalDelete, setOpenModalDelete] = useState(false)
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title={secret && limitText(`${secret.name} (${secret.type})`, 32)}/>
            {secret ? <>
                <Header>
                    <ButtonHeaderAnimated
                        icon="delete"
                        onPress={() => secret.secure ? setOpenModalVerify(id) : setOpenModalDelete(true)}
                    />
                    <ButtonHeaderAnimated
                        icon={`visibility${visibility ? '' : '-off'}`}
                        onPress={() => setVisibility(!visibility)}
                    />
                </Header>
                <Icon name={secret.icon} size={35}/>
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
            </> : <Loading/>}
            <Modal
                isVisible={openModalDelete}
                onBackdropPress={() => setOpenModalDelete(false)}
                onBackButtonPress={() => setOpenModalDelete(false)}
            >
                <ModalDelete id={id} setOpenModal={setOpenModalDelete}/>
            </Modal>
            <Modal
                isVisible={openModalVerify ? true : false}
                onBackdropPress={() => setOpenModalVerify(null)}
                onBackButtonPress={() => setOpenModalVerify(null)}
            >
                <ModalVerifyPassword hideToastFinal id={id} onSubmit={() => setOpenModalDelete(true)} setOpenModal={setOpenModalVerify}/>
            </Modal>
        </ContainerPd>
    )
}

export default Secret