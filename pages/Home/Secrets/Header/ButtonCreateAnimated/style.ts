import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.View)`
    margin-right: 8%;
    align-self: flex-end;
`

export const ButtonCreate = styled.TouchableOpacity`
    border-radius: ${RFPercentage(4)}px;
    background-color: ${props => props.theme.primary};
`

export const IconButtonCreate = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`