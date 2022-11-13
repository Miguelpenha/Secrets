import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    padding-bottom: 10%;
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

export const ContainerData = styled.View`
    width: 85%;
    align-self: center;
`

export const Data = styled.Text`
    color: red;
    width: 100%;
    margin-top: 5%;
    align-self: center;
    font-size: ${RFPercentage(2.6)}px;
`

export const ContainerButtons = styled.View`
    flex-direction: row;
    justify-content: space-around;
`