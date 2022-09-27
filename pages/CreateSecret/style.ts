import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Animated from 'react-native-reanimated'

export const ContainerButtonSelectIcon = styled(Animated.View)`
    margin-top: 4%;
    margin-bottom: 4%;
    align-self: center;
`

export const ButtonSelectIcon = styled.TouchableOpacity`
    padding: 4%;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const IconSelected = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Field = styled.View`
    width: 80%;
    margin-top: 2.5%;
    align-self: center;
    margin-bottom: 2.5%;
`

export const Label = styled.Text`
    margin-bottom: 2.5%;
    align-self: flex-start;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Input = styled.TextInput`
    padding: 2%;
    font-size: ${RFPercentage(2.5)}px;
    border-radius: ${RFPercentage(1)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const ButtonSubmit = styled.TouchableOpacity`
    width: 60%;
    padding: 4% 0%;
    margin-top: 10%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const TextButtonSubmit = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`