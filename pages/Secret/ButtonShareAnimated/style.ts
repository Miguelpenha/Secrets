import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.View)`
    right: 0%;
    bottom: -2%;
    position: absolute;
`

export const Button = styled.TouchableOpacity`
    padding: 9%;
    align-self: center;
    border-radius: ${RFPercentage(4)}px;
    background-color: ${props => props.theme.primary};
`

export const IconButton = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`