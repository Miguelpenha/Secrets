import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

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