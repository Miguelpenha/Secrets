import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const ContainerOptions = styled.ScrollView`
    margin-top: 19%;
`

export const ContainerSwitch = styled.View`
    margin-top: 2%;
    margin-bottom: 2%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

export const TextSwitch = styled.Text`
    font-size: ${RFPercentage(4)}px;
    line-height: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const EmojiTextSwitch = styled.Text`
    font-size: ${RFPercentage(2.8)}px;
    line-height: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Switch = styled.Switch`
    margin-left: 1%;
`

interface IVersion {
    top: number
}

export const Version = styled.Text<IVersion>`
    margin-bottom: 2%;
    align-self: center;
    font-size: ${RFPercentage(3.2)}px;
    margin-top: ${props => props.top}%;
    color: ${props => props.theme.secondaryColor};
`

export const ContainerPoweredBy = styled.View`
    margin-bottom: 5%;
    align-items: center;
`

export const TextPoweredBy = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const TextPoweredByName = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`