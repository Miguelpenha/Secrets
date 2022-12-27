import { useState } from 'react'
import useSecrets from '../../../contexts/secretsContext'
import { useTheme } from 'styled-components'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { RefreshControlProps } from 'react-native'

function usePropsRefreshControl() {
    const [refreshing, setRefreshing] = useState(false)
    const { loadSecrets } = useSecrets()
    const theme = useTheme()

    async function onRefresh() {
        setRefreshing(true)
    
        await loadSecrets()
    
        setRefreshing(false)
    }
    
    return {
        onRefresh,
        refreshing,
        colors: [theme.primary],
        progressViewOffset: RFPercentage(18.5),
        progressBackgroundColor: theme.secondary
    } as RefreshControlProps
}

export default usePropsRefreshControl