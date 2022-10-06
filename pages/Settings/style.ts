import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const ContainerSwitch = styled.View`
    margin-top: 2%;
    margin-bottom: 2%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

export const TextSwitch = styled.Text`
    font-size: ${RFPercentage(4)}px;
    line-height: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const EmojiTextSwitch = styled.Text`
    font-size: ${RFPercentage(2.8)}px;
    line-height: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Switch = styled.Switch`
    margin-left: 1%;
`

interface IButton {
    loading?: boolean
}

export const Button = styled.TouchableOpacity<IButton>`
    elevation: 8;
    padding: 4% 4%;
    margin: 4.5% 0%;
    align-self: center;
    align-items: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.loading ? props.theme.secondary : props.theme.backgroundColorSecondary};
`

interface IIconButton {
    right?: boolean
}

export const IconButton = styled(MaterialIcons)<IIconButton>`
    color: ${props => props.theme.primary};

    ${props => props.right ? css`
        margin-left: 1%;
    ` : css`
        margin-right: 1%;
    `}
`

interface IIconUpdateButton {
    checkUpdating: boolean
}

export const IconUpdateButton = styled(IconButton)<IIconUpdateButton>`
    ${props => props.checkUpdating ? css`
        transform: rotate(90deg);
    ` : css`
        transform: rotate(0deg);
    `};
`

export const TextButton = styled.Text`
    margin-left: 1%;
    font-weight: bold;
    padding-right: 1%;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`

interface IVersion {
    top: number
}

export const Version = styled.Text<IVersion>`
    margin-bottom: 2%;
    align-self: center;
    font-size: ${RFPercentage(3.2)}px;
    margin-top: ${props => props.top}%;
    color: ${props => props.theme.secondaryColor};
`

export const ContainerPoweredBy = styled.View`
    margin-bottom: 5%;
    align-items: center;
`

export const TextPoweredBy = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const TextPoweredByName = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`