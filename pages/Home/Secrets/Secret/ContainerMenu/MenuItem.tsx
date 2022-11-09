import { FC } from 'react'
import { useTheme } from 'styled-components'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MenuItem as MenuItemNotStyled } from 'react-native-material-menu'

interface Iprops {

}

const MenuItem: FC<Iprops> = ({ children }) => {
    const theme = useTheme()

    return (
        <MenuItemNotStyled
            textStyle={{
                color: theme.color,
                fontSize: RFPercentage(2.5)
            }}
            style={{height: RFPercentage(6)}}
            pressColor={theme.backgroundColor}
        >
            {children}
        </MenuItemNotStyled>
    )
}

export default MenuItem