import styled from 'styled-components/native'
import ContainerPd from '../../components/ContainerPd'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(ContainerPd)`
    padding-top: 30%;
`

export const Title = styled.Text`
    margin-top: 20%;
    text-align: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`