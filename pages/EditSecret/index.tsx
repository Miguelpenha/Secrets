import { useRoute, useNavigation } from '@react-navigation/native'
import { useSecret, useSecrets } from '../../contexts/secretsContext'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import useSecurityConfiguration from '../../contexts/securityConfigurationContext'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Value, Field, Label, Input, ContainerSwitch, TextSwitch, ButtonSubmit, TextButtonSubmit } from './style'
import { Switch } from 'react-native'
import Loading from '../../components/Loading'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import usePassword from '../../contexts/passwordContext'
import { useStatistic } from '../../contexts/statisticContext'
import useTypes from '../../contexts/typesContext'
import { ScrollView } from 'react-native'
import ModalConfirm from '../../components/ModalConfirm'

interface IParams {
    id: string
}

function Secret() {
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const { secrets, editSecret } = useSecrets()
    const navigation = useNavigation()
    const [value, setValue] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const theme = useTheme()
    const [secure, setSecure] = useState(false)
    const { password } = usePassword()
    const [hideIcon, setHideIcon] = useState(false)
    const [hideName, setHideName] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const { securityConfiguration } = useSecurityConfiguration()
    const [openModalSave, setOpenModalSave] = useState(false)
    const [openModalVerify, setOpenModalVerify] = useState<string | null>()
    const { statistic, setStatistic } = useStatistic()
    const { types, setTypes } = useTypes()

    useEffect(() => {
        if (secret) {
            setName(secret.name)
            setValue(secret.value)
            setSecure(secret.secure)
            setType(secret.type || '')
            setHideIcon(secret.hideIcon)
            setHideName(secret.hideName)
        }
    }, [secret])

    function handleSubmit() {
        securityConfiguration.verifyPasswordWhenEditSecret ? setOpenModalVerify(secret.id) : setOpenModalSave(true)
    }

    useEffect(() => {
        if (secret) {
            if (secret.name === name && secret.value === value && secret.hideIcon === hideIcon && secret.hideName === hideName && secret.secure === secure && secret.type === type) {
                setDisabledSubmit(true)
            } else {
                setDisabledSubmit(false)
            }
        }
    }, [value, name, secure, hideIcon, hideName, type, secret])
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ContainerPd>
                <HeaderBack onClick={() => navigation.goBack()} title="Editar segredo"/>
                {secret ? <>
                    <ScrollView contentContainerStyle={{paddingBottom: '30%'}}>
                        <Value
                            multiline
                            value={value}
                            placeholder="Valor..."
                            onChangeText={setValue}
                            selectionColor={theme.primary}
                            placeholderTextColor={theme.primary}
                            onTextInput={() => setStatistic({...statistic, timeWriting: statistic.timeWriting+0.5})}
                        />
                        <Field>
                            <Label>Nome do segredo</Label>
                            <Input
                                value={name}
                                placeholder="Nome..."
                                onChangeText={setName}
                                selectionColor={theme.primary}
                                placeholderTextColor={theme.primary}
                            />
                        </Field>
                        <Field>
                            <Label>Tipo do segredo</Label>
                            <Input
                                value={type}
                                placeholder="Tipo..."
                                onChangeText={setType}
                                selectionColor={theme.primary}
                                placeholderTextColor={theme.primary}
                            />
                        </Field>
                        <ContainerSwitch>
                            <TextSwitch>Seguro</TextSwitch>
                            <Switch
                                value={secure}
                                onChange={() => {
                                    setSecure(!secure)
                                    !secure && setHideIcon(true)
                                    !secure && setHideName(true)
                                }}
                                thumbColor={secure ? theme.primary : theme.primary}
                                trackColor={{false: theme.secondary, true: theme.primary}}
                            />
                        </ContainerSwitch>
                        <ContainerSwitch>
                            <TextSwitch>Esconder ícone</TextSwitch>
                            <Switch
                                value={hideIcon}
                                onChange={() => setHideIcon(!hideIcon)}
                                thumbColor={hideIcon ? theme.primary : theme.primary}
                                trackColor={{false: theme.secondary, true: theme.primary}}
                            />
                        </ContainerSwitch>
                        <ContainerSwitch>
                            <TextSwitch>Esconder nome</TextSwitch>
                            <Switch
                                value={hideName}
                                onChange={() => setHideName(!hideName)}
                                thumbColor={hideName ? theme.primary : theme.primary}
                                trackColor={{false: theme.secondary, true: theme.primary}}
                            />
                        </ContainerSwitch>
                    </ScrollView>
                    <ButtonSubmit disabled={disabledSubmit} onPress={handleSubmit}>
                        <TextButtonSubmit disabled={disabledSubmit}>Salvar</TextButtonSubmit>
                    </ButtonSubmit>
                </> : <Loading/>}
                <ModalConfirm
                    toastType="info"
                    confirmText="Salvar"
                    openModal={openModalSave}
                    setOpenModal={setOpenModalSave}
                    title="Deseja salvar essas alterações?"
                    toastMessage="Alterações salvas com sucesso!"
                    onConfirm={async () => {
                        await editSecret({ ...secret, name, type, value, secure, hideIcon, hideName, password: secure && password })

                        let typeExists = false
                        const typesNews: string[] = []

                        secrets.map(secretMap => {
                            if (secretMap.id !== secret.id) {
                                if (secretMap.type === secret.type) {
                                    typeExists = true
                                }

                                if (!typesNews.includes(secretMap.type)) {
                                    typesNews.push(secretMap.type)
                                }
                            }
                        })

                        if (!typeExists) {
                            setTypes(typesNews)
                        }

                        if (!typesNews.includes(type)) {
                            setTypes([...typesNews, type])
                        }

                        navigation.goBack()
                    }}
                />
                <ModalVerifyPassword
                    id={id}
                    hideToastFinal
                    openModal={openModalVerify}
                    setOpenModal={setOpenModalVerify}
                    onSubmit={() => setOpenModalSave(true)}
                />
            </ContainerPd>
        </TouchableWithoutFeedback>
    )
}

export default Secret