import { FC, memo } from 'react'
import { RefreshControlProps, RefreshControl as RefreshControlRow } from 'react-native'
import { useTheme } from 'styled-components'
import { RFPercentage } from 'react-native-responsive-fontsize'

const RefreshControl: FC<RefreshControlProps> = ({ ...props }) => {
    const theme = useTheme()

    return (
        <RefreshControlRow
            {...props}
            colors={[theme.primary]}
            progressViewOffset={RFPercentage(18)}
            progressBackgroundColor={theme.secondary}
        />
    )
}

export default memo(RefreshControl)