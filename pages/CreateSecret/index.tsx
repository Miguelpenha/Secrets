import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useState, useRef } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ListRenderItemInfo } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import ButtonSelectIconAnimated from './ButtonSelectIconAnimated'
import { Field, Label, ContainerInput, ContainerIconShow, IconShow, Input, ContainerSwitch, TextSwitch, ButtonSubmit, TextButtonSubmit } from './style'
import useSecrets from '../../contexts/secretsContext'
import { Modalize } from 'react-native-modalize'
import optionsModalize from '../../components/optionsModalize'
import { MaterialIcons } from '@expo/vector-icons'
import icons from './icons'
import { Switch } from 'react-native'
import onSubmit from './onSubmit'
import usePassword from '../../contexts/passwordContext'
import { ScrollView } from 'react-native'

function CreateSecret() {
    const navigation = useNavigation()
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
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const modalizeSelectIcon = useRef<Modalize>(null)
    
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
                                <Label>Tipo do segredo</Label>
                                <Input
                                    value={type}
                                    placeholder="Tipo..."
                                    onChangeText={setType}
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
                                />
                            </Field>
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
                        <ButtonSubmit onPress={async () => (
                            await onSubmit(icon, name, type, value, hideIcon, hideName, secure, password, passwordDefault, createSecret, navigation as any)
                        )}>
                            <TextButtonSubmit>Criar</TextButtonSubmit>
                        </ButtonSubmit>
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
            </>
        </TouchableWithoutFeedback>
    )
}

export default CreateSecret