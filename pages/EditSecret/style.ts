import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Value = styled.TextInput`
    padding: 5%;
    max-width: 90%;
    margin-top: 10%;
    margin-bottom: 5%;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.color};
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

export const ButtonSubmit = styled.TouchableOpacity`
    width: 50%;
    padding: 4% 0%;
    margin-top: 15%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    border: 2px solid ${props => props.theme.backgroundColorSecondary};
    background-color: ${props => props.disabled ? props.theme.backgroundColor : props.theme.backgroundColorSecondary};
`

interface ITextButtonSubmit {
    disabled: boolean
}

export const TextButtonSubmit = styled.Text<ITextButtonSubmit>`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.disabled ? props.theme.secondary : props.theme.primary};
`