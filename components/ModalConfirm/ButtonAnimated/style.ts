import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface IContainer {
    confirm: boolean
}

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))<IContainer>`
    width: 35%;
    elevation: 10;
    padding: 4% 0%;
    margin-top: 10%;
    border-radius: ${RFPercentage(1.8)}px;
    background-color: ${props => !props.confirm ? props.theme.secondaryColor : props.theme.backgroundColor};
`

interface IText {
    confirm: boolean
}

export const Text = styled(Animated.Text)<IText>`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => !props.confirm ? props.theme.color : props.theme.primary};
`