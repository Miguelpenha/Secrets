import styled from 'styled-components/native'
import ButtonBackNotStyled from '../ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Animated from 'react-native-reanimated'

export const Container = styled.View`
    z-index: 1;
    width: 100%;
    padding-top: 11%;
    position: absolute;
    background-color: ${props => props.theme.backgroundColor};
`

export const Row1 = styled.View`
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

export const Row2 = styled(Animated.View)`
    padding-bottom: 2.5%;
    border-bottom-width: 1.5px;
    border-bottom-color: ${props => props.theme.primary};
`