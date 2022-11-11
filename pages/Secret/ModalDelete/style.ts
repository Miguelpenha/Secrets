import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    padding-bottom: 12%;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Title = styled.Text`
    width: 80%;
    margin-top: 8%;
    font-weight: bold;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(3)}px;
    line-height: ${RFPercentage(4.5)}px;
    color: ${props => props.theme.color};
`

export const Buttons = styled.View`
    flex-direction: row;
`

export const ButtonCancel = styled.TouchableOpacity`
    width: 35%;
    elevation: 10;
    padding: 4% 0%;
    margin-top: 10%;
    margin-left: 10%;
    margin-right: auto;
    border-radius: ${RFPercentage(1.8)}px;
    background-color: ${props => props.theme.secondaryColor};
`

export const TextButtonCancel = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const ButtonDelete = styled.TouchableOpacity`
    width: 35%;
    elevation: 10;
    padding: 4% 0%;
    margin-top: 10%;
    margin-right: 10%;
    margin-left: auto;
    border-radius: ${RFPercentage(1.8)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const TextButtonDelete = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`