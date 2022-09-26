import { ISecret } from '../../../types'
import { FC } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming } from 'react-native-reanimated'
import { Container, Icon, Name, ContainerNext, Next } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import limitText from '../../../utils/limitText'
import { Dimensions } from 'react-native'

interface Iprops {
    secret: ISecret
}

const Secret: FC<Iprops> = ({ secret }) => {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)
    const pressedNext = useSharedValue(0)

    const styleAnimationPressed = useAnimatedStyle(() => ({
        transform: [{ scale: pressed.value }]
    }), [])

    const styleAnimationPressedIcon = useAnimatedStyle(() => ({
        transform: [{ scale: pressedIcon.value }]
    }), [])
    const styleAnimationPressedNext = useAnimatedStyle(() => ({
        transform: [{ translateX: pressedNext.value }]
    }), [])

    return (
        <Animated.View style={styleAnimationPressed}>
            <Container
                onPress={() => {
                    pressed.value = withSequence(withTiming(0.9, {
                        duration: 150
                    }), withTiming(1, {
                        duration: 150
                    }))

                    pressedIcon.value = withSequence(withTiming(0.7, {
                        duration: 200
                    }), withTiming(1, {
                        duration: 200
                    }))

                    pressedNext.value = withSequence(withTiming(12, {
                        duration: 200
                    }), withTiming(0, {
                        duration: 200
                    }))
                }}
                activeOpacity={0.5}
                onPressIn={() => {
                    pressed.value = withTiming(0.9)

                    pressedIcon.value = withTiming(0.7)

                    pressedNext.value = withTiming(12, {
                        duration: 200
                    })
                }}
                onPressOut={() => {
                    pressed.value = withTiming(1)

                    pressedIcon.value = withTiming(1, {
                        duration: 550
                    })

                    pressedNext.value = withTiming(0, {
                        duration: 550
                    })
                }}
            >
                <Animated.View style={styleAnimationPressedIcon}>
                    <Icon name={(!secret.secure || !secret.hideIcon) ? (!secret.hideIcon ? secret.icon : 'lock') : 'lock'} size={RFPercentage(4)}/>
                </Animated.View>
                <Name
                    editable={false}
                    numberOfLines={1}
                    secureTextEntry={secret.secure}
                >
                    {!secret.secure ? limitText(secret.name, Dimensions.get('window').scale*8) : '                   '}
                </Name>
                <Animated.View style={[styleAnimationPressedNext, ContainerNext]}>
                    <Next name="arrow-forward-ios" size={RFPercentage(4)}/>
                </Animated.View>
            </Container>
        </Animated.View>
    )
}

export default Secret