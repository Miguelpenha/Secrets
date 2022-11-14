import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export const Button = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    elevation: 8;
    padding: 4% 4%;
    margin: 4.5% 0%;
    align-self: center;
    align-items: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Icon = styled(Animated.createAnimatedComponent(MaterialIcons))`
    margin-right: 1%;
    color: ${props => props.theme.primary};
`

export const Text = styled(Animated.Text)`
    margin-left: 1%;
    font-weight: bold;
    padding-right: 1%;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`