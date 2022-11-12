import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Title = styled.Text`
    margin-top: 30%;
    text-align: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`