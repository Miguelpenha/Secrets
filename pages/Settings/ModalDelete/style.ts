import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 95%;
    height: 63%;
    padding: 5%;
    align-self: center;
    border-radius: ${RFPercentage(1)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const TitleModalDeleteAll = styled.Text`
    margin-top: 2%;
    align-self: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`

export const DataModalDeleteAll = styled.Text`
    width: 95%;
    color: red;
    margin-top: 5%;
    align-self: center;
    font-size: ${RFPercentage(2.6)}px;
`

export const FooterModalDeleteAll = styled.View`
    margin-top: auto;
    flex-direction: row;
`

const ButtonModalDeleteAll = css`
    width: 35%;
    padding: 4%;
    elevation: 8;
    border-radius: ${RFPercentage(1)}px;
`

export const ButtonCancelModalDeleteAll = styled.TouchableOpacity`
    ${ButtonModalDeleteAll}
    background-color: ${props => props.theme.secondaryColor};
`

export const TextButtonCancelModalDeleteAll = styled.Text`
    font-weight: bold;
    align-self: center;
    color: ${props => props.theme.color};
`

export const ButtonSubmitModalDeleteAll = styled.TouchableOpacity`
    ${ButtonModalDeleteAll}
    margin-left: auto;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const TextButtonSubmitModalDeleteAll = styled.Text`
    font-weight: bold;
    align-self: center;
    color: ${props => props.theme.primary};
`