import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Header = styled.View`
    margin-top: 5%;
    margin-bottom: 4%;
    flex-direction: row;
    justify-content: space-between;
`

export const Icon = styled(MaterialIcons)`
    padding: 4%;
    margin-top: 5%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const ContainerValue = styled.TouchableOpacity`
    padding: 5%;
    max-width: 90%;
    margin-top: 10%;
    margin-bottom: 28%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Value = styled.TextInput`
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`