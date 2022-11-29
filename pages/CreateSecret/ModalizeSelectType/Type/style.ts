import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 50%;
    padding: 3%;
    elevation: 8;
    margin: 4% 0%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    border: 2px solid ${props => props.theme.backgroundColorSecondary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Text = styled(Animated.Text)`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`