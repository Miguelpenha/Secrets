import { useRoute, useNavigation } from '@react-navigation/native'
import { IParams } from './types'
import { useSecret, useSecrets } from '../../contexts/secretsContext'
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
import ModalConfirm from '../../components/ModalConfirm'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'
import useHideSecretOnShow from '../../contexts/hideSecretOnShowContext'
import useTypes from '../../contexts/typesContext'
import { Share } from 'react-native'
import { ScrollView } from 'react-native'

function Secret() {
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const { secrets, deleteSecret } = useSecrets()
    const navigation = useNavigation()
    const { securityConfiguration } = useSecurityConfiguration()
    const { hideSecretOnShow } = useHideSecretOnShow()
    const { types, setTypes } = useTypes()
    const [visibility, setVisibility] = useState(!hideSecretOnShow)
    const [openModalVerifyDelete, setOpenModalVerifyDelete] = useState<string | null>()
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalVerifyShare, setOpenModalVerifyShare] = useState<string | null>()
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title={secret && limitText(`${secret.name} ${secret.type && `(${secret.type})`}`, 25)}/>
            {secret ? <>
                <ScrollView>
                    <Header>
                        <ButtonHeaderAnimated
                            icon="delete"
                            onPress={() => (secret.secure || securityConfiguration.verifyPasswordWhenDeleteSecret) ? setOpenModalVerifyDelete(id) : setOpenModalDelete(true)}
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
                    <ContainerValue onLongPress={() => {
                        Clipboard.setString(secret.value)

                        Toast.show({
                            text1: 'Segredo copiado!',
                            type: 'success',
                            onPress() {
                                Toast.hide()
                            }
                        })
                    }} activeOpacity={0.4} onPress={() => setVisibility(!visibility)}>
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
            <ModalConfirm
                openModal={openModalDelete}
                setOpenModal={setOpenModalDelete}
                title="Deseja deletar esse segredo?"
                toastMessage="Segredo deletado com sucesso!"
                onConfirm={async () => {
                    let typeExists = false
                    const typesNews: string[] = []

                    secrets.map(secretMap => {
                        if (secretMap.id !== secret.id) {
                            if (secretMap.type === secret.type) {
                                typeExists = true
                            }

                            typesNews.push(secretMap.type)
                        }
                    })

                    if (!typeExists) {
                        setTypes(typesNews)
                    }
                    
                    await deleteSecret(id)
                    
                    navigation.navigate('Home')
                }}
            />
            <ModalVerifyPassword openModal={openModalVerifyDelete} hideToastFinal id={id} onSubmit={() => setOpenModalDelete(true)} setOpenModal={setOpenModalVerifyDelete}/>
            <ModalVerifyPassword openModal={openModalVerifyShare} hideToastFinal id={id} onSubmit={() => setTimeout(async () => {
                await Share.share({
                    title: secret.name,
                    message: secret.value
                }, {
                    dialogTitle: secret.name
                })
            }, 150)} setOpenModal={setOpenModalVerifyShare}/>
        </ContainerPd>
    )
}

export default Secret