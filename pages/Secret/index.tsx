import { useRoute, useNavigation } from '@react-navigation/native'
import { IParams } from './types'
import { useSecret } from '../../contexts/secretsContext'
import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import limitText from '../../utils/limitText'
import ButtonDeleteAnimated from './ButtonDeleteAnimated'
import { Icon, Value } from './style'
import Loading from '../../components/Loading'
import Modal from 'react-native-modal'
import ModalDelete from './ModalDelete'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'

function Secret() {
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const navigation = useNavigation()
    const [openModalVerify, setOpenModalVerify] = useState<string | null>()
    const [openModalDelete, setOpenModalDelete] = useState(false)
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title={secret && limitText(secret.name, 32)}/>
            {secret ? <>
                <ButtonDeleteAnimated onPress={() => {
                    secret.secure ? setOpenModalVerify(id) : setOpenModalDelete(true)
                }}/>
                <Icon name={secret.icon} size={35}/>
                <Value>{secret.value}</Value>
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
                onBackdropPress={() => setOpenModalDelete(false)}
                onBackButtonPress={() => setOpenModalDelete(false)}
            >
                <ModalVerifyPassword hideToastFinal id={id} onSubmit={() => setOpenModalDelete(true)} setOpenModal={setOpenModalVerify}/>
            </Modal>
        </ContainerPd>
    )
}

export default Secret