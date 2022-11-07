import styled from 'styled-components/native'
import ButtonBackNotStyled from '../ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    z-index: 1;
    width: 100%;
    padding-top: 8%;
    padding-bottom: 2%;
    position: absolute;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
`

export const ButtonBack = styled(ButtonBackNotStyled)`
    margin-left: 2%;
    align-self: center;
`

export const ContainerHeader = styled.View`
    padding-left: 0.2%;
    align-self: center;
    flex-direction: row;
`

export const Title = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`