import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    padding: 6%;
    elevation: 15;
    margin-bottom: 10%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Statistic = styled(Animated.Text)`
    font-weight: bold;
    text-align: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Value = styled(Animated.Text)`
    margin-top: 3%;
    font-weight: bold;
    text-align: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`