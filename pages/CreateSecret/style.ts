import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Field = styled.View`
    width: 80%;
    margin-top: 2.5%;
    align-self: center;
    margin-bottom: 2.5%;
`

export const Label = styled.Text`
    margin-bottom: 2.5%;
    align-self: flex-start;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

export const ContainerInput = styled.View`
    flex-direction: row;
`

export const ContainerIconShow = styled.TouchableOpacity`
    margin-right: 5%;
    align-self: center;
`

export const IconShow = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

interface IInput {
    notFullWidth?: boolean
}

export const Input = styled.TextInput<IInput>`
    padding: 2%;
    elevation: 8;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(1)}px;
    color: ${props => props.theme.color};
    width: ${props => !props.notFullWidth ? 93 : 80}%;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const ContainerSwitch = styled.View`
    width: 75%;
    margin-left: 10%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const TextSwitch = styled.Text`
    font-size: ${RFPercentage(3)}px;
    line-height: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.primary};
`