import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    left: 7.5%;
    width: 68%;
    padding: 1.5% 2%;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Text = styled(Animated.Text)`
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const Icon = styled(Animated.createAnimatedComponent(MaterialIcons))`
    margin-left: auto;
    color: ${props => props.theme.primary};
`