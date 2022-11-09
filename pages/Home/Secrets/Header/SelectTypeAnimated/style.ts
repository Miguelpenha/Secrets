import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 85%;
    padding: 2.5%;
    margin-top: 12%;
    align-self: center;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Text = styled(Animated.Text)`
    margin-left: auto;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`

export const Icon = styled(Animated.createAnimatedComponent(MaterialIcons))`
    margin-left: auto;
    color: ${props => props.theme.primary};
`