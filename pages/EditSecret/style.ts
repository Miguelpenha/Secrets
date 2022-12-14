import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Header = styled.View`
    padding: 0% 10%;
    margin-top: 30%;
    margin-bottom: 8%;
    flex-direction: row;
    justify-content: center;
`

export const Value = styled.TextInput`
    padding: 5%;
    elevation: 12;
    max-width: 90%;
    margin-bottom: 4%;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Field = styled.View`
    width: 80%;
    margin-top: 2.5%;
    margin-bottom: 4%;
    align-self: center;
`

export const Label = styled.Text`
    margin-bottom: 2.5%;
    align-self: flex-start;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Input = styled.TextInput`
    width: 93%;
    padding: 2%;
    elevation: 8;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(1)}px;
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
    width: 60%;
    bottom: 4%;
    padding: 5%;
    elevation: 8;
    align-self: center;
    position: absolute;
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
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.disabled ? props.theme.secondary : props.theme.primary};
`