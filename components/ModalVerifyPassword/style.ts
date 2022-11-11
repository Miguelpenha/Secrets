import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    padding-bottom: 12%;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Title = styled.Text`
    margin-top: 8%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`

export const ContainerInput = styled.View`
    width: 80%;
    margin-top: 8%;
    align-self: center;
    flex-direction: row;
`

export const ContainerIconShow = styled.TouchableOpacity`
    margin-right: 5%;
    align-self: center; 
`

export const IconShow = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Input = styled.TextInput`
    width: 80%;
    padding: 2%;
    elevation: 10;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(1)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
`