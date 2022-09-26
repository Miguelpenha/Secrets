import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import useSecrets, { useSecret } from '../../contexts/secretsContext'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import limitText from '../../utils/limitText'
import { ContainerButtonDelete, ButtonDelete, IconButtonDelete, Loading } from './style'
import { Platform } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Toast from 'react-native-toast-message'

interface IParams {
    id: string
}

function Secret() {
    const navigation = useNavigation()
    const { id } = useRoute().params as IParams
    const { deleteSecret } = useSecrets()
    const secret = useSecret(id)
    const theme = useTheme()
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)

    const styleAnimationButtonCreate = useAnimatedStyle(() => ({
        transform: [{ scale: pressed.value }]
    }), [])
  
    const styleAnimationIconButtonCreate= useAnimatedStyle(() => ({
        transform: [{ scale: pressedIcon.value }]
    }), [])

    if (secret) {
        return (
            <ContainerPd>
                <HeaderBack onClick={() => navigation.goBack()} title={limitText(secret.name, 32)}/>
                <ContainerButtonDelete style={styleAnimationButtonCreate}>
                    <ButtonDelete
                        onPress={() => {
                            pressed.value = withTiming(0.8, {
                                duration: 100
                            })
            
                            pressedIcon.value = withTiming(0.8, {
                                duration: 200
                            })
                            
                            setTimeout(async () => {
                                await deleteSecret(id)

                                navigation.navigate('Home')

                                Toast.show({
                                    type: 'error',
                                    text1: 'Segredo excluído com sucesso'
                                })
            
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
                    <Animated.View style={styleAnimationIconButtonCreate}>
                        <IconButtonDelete name="delete" size={30}/>
                    </Animated.View>
                </ButtonDelete>
            </ContainerButtonDelete>
            </ContainerPd>
        )
    } else {
        return <Loading color={theme.primary} size={Platform.OS === 'android' ? 50 : 'large'}/>
    }
}

export default Secret