import styled from 'styled-components/native'
import { Menu as MenuNotStyled } from 'react-native-material-menu'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Menu = styled(MenuNotStyled)`
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`