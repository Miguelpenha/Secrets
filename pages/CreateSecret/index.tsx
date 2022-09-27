import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useState, useRef } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ListRenderItemInfo } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { ContainerButtonSelectIcon, ButtonSelectIcon, IconSelected, Field, Label, Input, ButtonSubmit, TextButtonSubmit } from './style'
import useSecrets from '../../contexts/secretsContext'
import uuid from 'react-native-uuid'
import Toast from 'react-native-toast-message'
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated'
import { Modalize } from 'react-native-modalize'
import optionsModalize from '../../components/optionsModalize'
import { MaterialIcons } from '@expo/vector-icons'
import icons from './icons'
import ButtonIcon from './ButtonIcon'

function CreateSecret() {
    const navigation = useNavigation()
    const theme = useTheme()
    const [icon, setIcon] = useState<keyof typeof MaterialIcons.glyphMap>('vpn-key')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const { createSecret } = useSecrets()
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)
    const modalizeSelectIcon = useRef<Modalize>(null)

    const styleAnimationButtonSelectIcon = useAnimatedStyle(() => ({
        transform: [{ scale: pressed.value }]
    }), [])
  
    const styleAnimationIconSelected = useAnimatedStyle(() => ({
        transform: [{ scale: pressedIcon.value }]
    }), [])
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ContainerPd>
                <HeaderBack onClick={() => navigation.goBack()} title="Criar segredo"/>
                <KeyboardAvoidingView behavior="height" enabled>
                    <ContainerButtonSelectIcon style={styleAnimationButtonSelectIcon}>
                        <ButtonSelectIcon
                            onPress={() => {
                                pressed.value = withTiming(0.8, {
                                    duration: 100
                                })
                
                                pressedIcon.value = withTiming(0.8, {
                                    duration: 200
                                })
                                
                                setTimeout(() => {
                                    modalizeSelectIcon.current.open()
                
                                    pressed.value = withTiming(1, {
                                        duration: 100
                                    })
                    
                                    pressedIcon.value = withTiming(1, {
                                        duration: 200
                                    })
                                }, 200)
                            }}
                            activeOpacity={0.5}
                            onPressIn={() => {
                                pressed.value = withTiming(0.8)
                
                                pressedIcon.value = withTiming(0.8, {
                                    duration: 900
                                })
                            }}
                            onPressOut={() => {
                                pressed.value = withTiming(1)
                
                                pressedIcon.value = withTiming(1, {
                                    duration: 900
                                })
                            }}
                        >
                            <Animated.View style={styleAnimationIconSelected}>
                                <IconSelected name={icon} size={35}/>
                            </Animated.View>
                        </ButtonSelectIcon>
                    </ContainerButtonSelectIcon>
                    <Field>
                        <Label>Nome do segredo</Label>
                        <Input
                            value={name}
                            onChangeText={setName}
                            placeholder="Nome..."
                            selectionColor={theme.primary}
                            placeholderTextColor={theme.primary}
                        />
                    </Field>
                    <Field>
                        <Label>Tipo do segredo</Label>
                        <Input
                            value={type}
                            onChangeText={setType}
                            placeholder="Tipo..."
                            selectionColor={theme.primary}
                            placeholderTextColor={theme.primary}
                        />
                    </Field>
                    <Field>
                        <Label>Valor do segredo</Label>
                        <Input
                            multiline
                            value={value}
                            placeholder="Valor..."
                            onChangeText={setValue}
                            selectionColor={theme.primary}
                            placeholderTextColor={theme.primary}
                        />
                    </Field>
                </KeyboardAvoidingView>
                <ButtonSubmit
                    onPress={async () => {
                        if (icons && name && type && value) {
                            await createSecret({
                                name,
                                type,
                                value,
                                icon,
                                id: String(uuid.v4())
                            })

                            navigation.navigate('Home')

                            Toast.show({
                                type: 'success',
                                text1: 'Segredo criado com sucesso',
                                onPress() {
                                    Toast.hide()
                                }
                            })
                        } else {
                            Toast.show({
                                type: 'error',
                                text1: 'Campos não preenchidos',
                                onPress() {
                                    Toast.hide()
                                }
                            })
                        }
                    }}
                >
                    <TextButtonSubmit>Criar</TextButtonSubmit>
                </ButtonSubmit>
                <Modalize
                    ref={modalizeSelectIcon}
                    {...optionsModalize(theme, 90, 64)}
                    childrenStyle={{ width: '110%', alignItems: 'center' }}
                    flatListProps={{
                        data: icons,
                        keyExtractor: (item, index) => String(index),
                        renderItem: ({ item }: ListRenderItemInfo<keyof typeof MaterialIcons.glyphMap>) => (
                            <ButtonIcon icon={item} setIcon={setIcon} onPress={() => {
                                modalizeSelectIcon.current.close()
                
                                pressedIcon.value = withSequence(withTiming(0.7), withTiming(1))
                            }}/>
                        ),
                        numColumns: 2,
                        style: {
                            flexBasis: 0,
                            paddingTop: '5%'
                        }
                    }}
                />
            </ContainerPd>
        </TouchableWithoutFeedback>
    )
}

export default CreateSecret