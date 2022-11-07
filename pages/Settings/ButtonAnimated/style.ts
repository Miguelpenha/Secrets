import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

interface IButton {
    loading?: boolean
}

export const Button = styled(Animated.createAnimatedComponent(TouchableOpacity))<IButton>`
    elevation: 8;
    padding: 4% 4%;
    margin: 4.5% 0%;
    align-self: center;
    align-items: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.loading ? props.theme.secondary : props.theme.backgroundColorSecondary};
`

interface IIcon {
    right?: boolean
    loading?: boolean
}

export const Icon = styled(Animated.createAnimatedComponent(MaterialIcons))<IIcon>`
    color: ${props => props.theme.primary};

    ${props => props.right ? css`
        margin-left: 1%;
    ` : css`
        margin-right: 1%;
    `}

    /* ${props => props.loading ? css`
        transform: rotate(90deg);
    ` : css`
        transform: rotate(0deg);
    `}; */
`

export const Text = styled(Animated.Text)`
    margin-left: 1%;
    font-weight: bold;
    padding-right: 1%;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`