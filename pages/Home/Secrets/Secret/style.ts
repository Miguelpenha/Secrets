import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity, TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 85%;
    elevation: 10;
    padding: 3.5%;
    margin-top: 3%;
    margin-bottom: 3%;
    align-self: center;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFPercentage(1.5)}px;
    background-color: ${props => props.theme.secondaryColor};
`

export const Icon = styled(Animated.createAnimatedComponent(MaterialIcons))`
    margin-right: 5.5%;
    color: ${props => props.theme.primary};
`

export const Name = styled(Animated.createAnimatedComponent(TextInput))`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`

export const Next = styled(Animated.createAnimatedComponent(MaterialIcons))`
    margin-left: auto;
    color: ${props => props.theme.primary};
`