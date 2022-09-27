import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Animated from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.View)`
    margin: 3% 5%;
    align-items: center;
`

export const Button = styled.TouchableOpacity`
    padding: 12%;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Icon = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`