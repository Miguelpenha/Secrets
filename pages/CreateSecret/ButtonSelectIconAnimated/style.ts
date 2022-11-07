import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.View)`
    margin: 3% 5%;
    align-self: center;
    align-items: center;
    margin-top: 30%;
`

interface IButtonSelectIcon {
    big: boolean
}

export const ButtonSelectIcon = styled.TouchableOpacity<IButtonSelectIcon>`
    border-radius: ${RFPercentage(2)}px;
    padding: ${props => props.big ? 12 : 4}%;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const IconSelected = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`