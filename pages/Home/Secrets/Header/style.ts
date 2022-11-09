import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    margin-top: 12%;
    margin-bottom: 2%;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin-left: 2%;
    margin-right: auto;
    position: absolute;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Title = styled.Text`
    margin-top: 18%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(5)}px;
    color: ${props => props.theme.primary};
`

export const EmojiTitle = styled.Text`
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`

export const Actions = styled.View`
    margin-top: 12%;
`

export const ActionsRow = styled.View`
    flex-direction: row;
    align-items: center;
`

export const InputFind = styled.TextInput`
    left: 7.5%;
    width: 68%;
    padding: 3.5%;
    position: absolute;
    font-size: ${RFPercentage(3)}px;
    border-radius: ${RFPercentage(1)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColorSecondary};
`