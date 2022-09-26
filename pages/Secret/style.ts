import { MaterialIcons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ContainerButtonDelete = styled(Animated.View)`
    margin-right: 8%;
    align-self: flex-end;
`

export const ButtonDelete = styled.TouchableOpacity`
    padding: 2.5%;
    border-radius: ${RFPercentage(4)}px;
    background-color: ${props => props.theme.primary};
`

export const IconButtonDelete = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`

export const Loading = styled.ActivityIndicator`
    margin: auto;
`