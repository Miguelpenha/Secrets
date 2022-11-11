import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    padding-bottom: 12%;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Title = styled.Text`
    margin-top: 8%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`

export const Input = styled.TextInput`
    width: 80%;
    padding: 2%;
    elevation: 10;
    margin-top: 8%;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(1)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
`

export const ButtonSubmit = styled.TouchableOpacity`
    width: 60%;
    elevation: 12;
    padding: 4% 0%;
    margin-top: 10%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const TextButtonSubmit = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`