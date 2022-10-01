import { FC, memo } from 'react'
import { ActivityIndicatorProps, Platform } from 'react-native'
import { useTheme } from 'styled-components'
import { LoadingRow } from './style'

const Loading: FC<ActivityIndicatorProps> = ({ ...props }) => {
    const theme = useTheme()

    return (
        <LoadingRow
            {...props}
            color={theme.primary}
            size={Platform.OS === 'android' ? 50 : 'large'}
        />
    )
}

export default memo(Loading)