import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const TypeContainer = styled.TouchableOpacity`
    width: 50%;
    padding: 3%;
    elevation: 8;
    margin-top: 8%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    border: 2px solid ${props => props.theme.backgroundColorSecondary};
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const TypeText = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`