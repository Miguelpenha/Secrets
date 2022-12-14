import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ListRenderItemInfo } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import ButtonSelectIconAnimated from './ButtonSelectIconAnimated'
import { Field, Label, ContainerInput, ContainerIconShow, IconShow, Input, ContainerSwitch, TextSwitch } from './style'
import useSecrets from '../../contexts/secretsContext'
import useTypes from '../../contexts/typesContext'
import { Modalize } from 'react-native-modalize'
import optionsModalize from '../../components/optionsModalize'
import { MaterialIcons } from '@expo/vector-icons'
import icons from './icons'
import { Switch } from 'react-native'
import onSubmit from './onSubmit'
import usePassword from '../../contexts/passwordContext'
import { useStatistic } from '../../contexts/statisticContext'
import { ScrollView } from 'react-native'
import ButtonSubmitAnimated from './ButtonSubmitAnimated'
import { useSecret } from '../../contexts/secretsContext'
import SelectTypeAnimated from './SelectTypeAnimated'
import ModalizeSelectType from './ModalizeSelectType'
import ModalCreateType from '../../components/ModalCreateType'

interface IParams {
    id: string
}

function CreateSecret() {
    const navigation = useNavigation()
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const theme = useTheme()
    const { password: passwordDefault } = usePassword()
    const [icon, setIcon] = useState<keyof typeof MaterialIcons.glyphMap>('vpn-key')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const [hideIcon, setHideIcon] = useState(false)
    const [hideName, setHideName] = useState(false)
    const [secure, setSecure] = useState(false)
    const { createSecret } = useSecrets()
    const { types, setTypes } = useTypes()
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const modalizeSelectIcon = useRef<Modalize>(null)
    const [openModalizeSelectType, setOpenModalizeSelectType] = useState(false)
    const { statistic, setStatistic } = useStatistic()
    const modalizeSelectType = useRef<Modalize>(null)
    const [openModalCreateType, setOpenModalCreateType] = useState(false)

    useEffect(() => {
        if (secret) {
            setIcon(secret.icon)
            setName(secret.name)
            setType(secret.type)
            setValue(secret.value)
            setHideIcon(secret.hideIcon)
            setHideName(secret.hideName)
            setSecure(secret.secure)
        }
    }, [secret])
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
                <KeyboardAvoidingView behavior="height" enabled>
                    <ContainerPd>
                        <HeaderBack onClick={() => navigation.goBack()} title="Criar segredo"/>
                        <ScrollView contentContainerStyle={{paddingBottom: '30%'}}>
                            <ButtonSelectIconAnimated icon={icon} onPress={() => modalizeSelectIcon.current.open()}/>
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
                                <Label>Segredo</Label>
                                <Input
                                    multiline
                                    value={value}
                                    placeholder="Segredo..."
                                    onChangeText={setValue}
                                    selectionColor={theme.primary}
                                    placeholderTextColor={theme.primary}
                                    onTextInput={() => setStatistic({...statistic, timeWriting: statistic.timeWriting+0.5})}
                                />
                            </Field>
                            <SelectTypeAnimated
                                type={type}
                                setType={setType}
                                onLongPress={() => setType('')}
                                openModalizeSelectType={openModalizeSelectType}
                                onPress={() => modalizeSelectType.current.open()}
                            />
                            <ContainerSwitch>
                                <TextSwitch>Esconder ??cone</TextSwitch>
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
                            <ContainerSwitch>
                                <TextSwitch>Seguro</TextSwitch>
                                <Switch
                                    value={secure}
                                    onChange={() => {
                                        setPassword('')
                                        setSecure(!secure)
                                        setShowPassword(false)
                                        !secure && setHideIcon(true)
                                        !secure && setHideName(true)
                                    }}
                                    thumbColor={secure ? theme.primary : theme.primary}
                                    trackColor={{false: theme.secondary, true: theme.primary}}
                                />
                            </ContainerSwitch>
                            {secure && (
                                <Field>
                                    <Label>Senha para o segredo (opcional)</Label>
                                    <ContainerInput>
                                        <ContainerIconShow onPress={() => setShowPassword(!showPassword)}>
                                            <IconShow name={`visibility${showPassword ? '' : '-off'}`} size={25}/>
                                        </ContainerIconShow>
                                        <Input
                                            notFullWidth
                                            value={password}
                                            autoCapitalize="none"
                                            placeholder="Senha..."
                                            onChangeText={setPassword}
                                            autoCompleteType="password"
                                            selectionColor={theme.primary}
                                            secureTextEntry={!showPassword}
                                            placeholderTextColor={theme.primary}
                                            keyboardType={showPassword ? 'visible-password' : 'default'}
                                        />
                                    </ContainerInput>
                                </Field>
                            )}
                        </ScrollView>
                        <ButtonSubmitAnimated onPress={async () => (
                            await onSubmit(icon, name, type, value, hideIcon, hideName, secure, password, passwordDefault, createSecret, navigation as any, type => {
                                if (!types.includes(type)) {
                                    setTypes([...types, type])
                                }
                            })
                        )}/>
                    </ContainerPd>
                </KeyboardAvoidingView>
                <Modalize
                    ref={modalizeSelectIcon}
                    {...optionsModalize(theme, 90, 64)}
                    childrenStyle={{ width: '115%', alignItems: 'center' }}
                    flatListProps={{
                        data: icons,
                        keyExtractor: item => item,
                        renderItem: ({ item }: ListRenderItemInfo<keyof typeof MaterialIcons.glyphMap>) => (
                            <ButtonSelectIconAnimated big icon={item} onPress={icon => {
                                setIcon(icon)

                                modalizeSelectIcon.current.close()
                            }}/>
                        ),
                        numColumns: 2,
                        style: {
                            flexBasis: 0,
                            paddingTop: '5%'
                        }
                    }}
                />
                <ModalizeSelectType
                    setTypeSelect={setType}
                    modalize={modalizeSelectType}
                    setOpenModalize={setOpenModalizeSelectType}
                    setOpenModalCreateType={setOpenModalCreateType}
                />
                <ModalCreateType
                    openModal={openModalCreateType}
                    setOpenModal={setOpenModalCreateType}
                    onSubmit={typeNew => {
                        setTypes([...types, typeNew])
                        setType(typeNew)
                    }}
                />
            </>
        </TouchableWithoutFeedback>
    )
}

export default CreateSecret