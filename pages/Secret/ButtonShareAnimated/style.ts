import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    right: 6%;
    bottom: 4%;
    padding: 3%;
    elevation: 8;
    position: absolute;
    align-self: center;
    align-items: center;
    justify-content: center;
    border-radius: ${RFPercentage(4)}px;
    background-color: ${props => props.theme.primary};
`

export const Icon = styled(Animated.createAnimatedComponent(MaterialIcons))`
    color: ${props => props.theme.color};
`