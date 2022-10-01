import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Icon = styled(MaterialIcons)`
    padding: 4%;
    margin-top: 5%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Value = styled.Text`
    margin-top: 10%;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.color};
`