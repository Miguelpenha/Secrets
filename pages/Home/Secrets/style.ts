import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Message = styled.Text`
    width: 80%;
    padding: 4%;
    margin-top: 5%;
    text-align: center;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    border-radius: ${RFPercentage(2)}px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`