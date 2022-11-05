import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

interface IContainer {
    bottom: boolean
}

export const Container = styled(Animated.View)<IContainer>`
    right: 0%;
    position: absolute;
    bottom: ${props => props.bottom ? -2 : -10}%;
`

export const Button = styled.TouchableOpacity`
    padding: 8%;
    align-self: center;
    border-radius: ${RFPercentage(4)}px;
    background-color: ${props => props.theme.primary};
`

export const IconButton = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`