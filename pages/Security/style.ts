import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Sections = styled.ScrollView`
    margin-top: 22%;
`

export const Section = styled.Text`
    width: 80%;
    margin-top: 5%;
    font-weight: bold;
    text-align: center;
    align-self: center;
    padding-bottom: 4%;
    border-bottom-width: 2px;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
    border-bottom-color: ${props => props.theme.backgroundColorSecondary};
`

export const ContainerSwitch = styled.View`
    width: 82%;
    margin: 0% 0%;
    align-self: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const TextSwitch = styled.Text`
    font-size: ${RFPercentage(3.5)}px;
    line-height: ${RFPercentage(4)}px;
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
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const TextButtonSubmit = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`