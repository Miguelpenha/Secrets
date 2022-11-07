import styled from 'styled-components/native'
import ButtonBackNotStyled from '../ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    z-index: 1;
    margin-top: 8%;
    position: absolute;
    flex-direction: row;
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