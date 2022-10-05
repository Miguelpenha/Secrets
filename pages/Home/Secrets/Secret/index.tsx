import { ISecret } from '../../../../types'
import { FC } from 'react'
import Animated from 'react-native-reanimated'
import { Container, Icon, Name, ContainerNext, Next } from './style'
import { useNavigation } from '@react-navigation/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import limitText from '../../../../utils/limitText'
import { Dimensions } from 'react-native'
import useAnimations from './useAnimations'

interface Iprops {
    secret: ISecret
    onVerify: (id: string) => void
}

const Secret: FC<Iprops> = ({ secret, onVerify }) => {
    const navigation = useNavigation()
    const { animationPressed, animationPressedIcon, animationPressedNext, events } = useAnimations()
    
    return (
        <Animated.View style={animationPressed}>
            <Container {...events(() => {
                if (secret.secure) {
                    onVerify(secret.id)
                } else {
                    navigation.navigate('Secret', { id: secret.id })
                }
            })}>
                <Animated.View style={animationPressedIcon}>
                    <Icon
                        size={RFPercentage(4)}
                        name={(!secret.hideIcon || !secret.secure) ? (!secret.hideIcon ? secret.icon : 'lock') : 'lock'}
                    />
                </Animated.View>
                <Name editable={false} numberOfLines={1} secureTextEntry={secret.hideName && secret.secure}>
                    {(!secret.hideName || !secret.secure) ? limitText(secret.name, Dimensions.get('window').scale*8) : '                   '}
                </Name>
                <Animated.View style={[animationPressedNext, ContainerNext]}>
                    <Next name="arrow-forward-ios" size={RFPercentage(4)}/>
                </Animated.View>
            </Container>
        </Animated.View>
    )
}

export default Secret