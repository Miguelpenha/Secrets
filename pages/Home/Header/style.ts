import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    margin-top: 12%;
    margin-bottom: 8%;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin-left: 2%;
    margin-right: auto;
    position: absolute;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Title = styled(Animated.Text)`
    margin-top: 18%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(5)}px;
    color: ${props => props.theme.primary};
`

export const EmojiTitle = styled(Animated.Text)`
    margin-top: 18%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`