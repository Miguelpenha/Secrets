import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

interface IContainer {
    big: boolean
}

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))<IContainer>`
    elevation: 8;
    margin: 3% 10%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    padding: ${props => props.big ? 5 : 4}%;
    background-color: ${props => props.theme.backgroundColorSecondary};

    ${props => !props.big && css`
        margin-top: 30%;
    `}
`

export const Icon = styled(Animated.createAnimatedComponent(MaterialIcons))`
    color: ${props => props.theme.primary};
`