import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { ViewStyle } from 'react-native'

export const Container = styled.TouchableOpacity`
    width: 85%;
    padding: 4%;
    margin-top: 4%;
    margin-bottom: 4%;
    align-self: center;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFPercentage(1.5)}px;
    background-color: ${props => props.theme.secondaryColor};
`

export const Icon = styled(MaterialIcons)`
    margin-left: 5.5%;
    color: ${props => props.theme.primary};
`

export const Name = styled.TextInput`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`

export const ContainerNext: ViewStyle = {
    marginLeft: 'auto'
}

export const Next = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`