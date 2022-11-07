import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

interface IForm {
    initial: boolean
}

export const Form = styled.ScrollView<IForm>`
    ${props => !props.initial && css`
        margin-top: 17%;
    `}
`

export const Title = styled.Text`
    margin-top: 12%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4.5)}px;
    color: ${props => props.theme.primary};
`

export const EmojiTitle = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.primary};
`

export const Field = styled.View`
    width: 80%;
    margin-top: 12%;
    align-self: center;
    flex-direction: row;
`

export const ButtonIconShow = styled.TouchableOpacity`
    margin-right: 5%;
    align-self: center;
`

export const IconShow = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Input = styled.TextInput`
    width: 85%;
    padding: 3%;
    font-size: ${RFPercentage(3)}px;
    border-radius: ${RFPercentage(1)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColorSecondary};
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