import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.View)`
    margin-right: 5%;
    margin-left: auto;
    margin-bottom: 8%;
`

export const Button = styled.TouchableOpacity`
    padding: 3%;
    align-self: center;
    border-radius: ${RFPercentage(4)}px;
    background-color: ${props => props.theme.primary};
`

export const IconButton = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`