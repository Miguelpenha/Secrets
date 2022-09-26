import { useTheme } from 'styled-components'
import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import { FlatList, ListRenderItemInfo, RefreshControl, Platform } from 'react-native'
import secrets from './secrets'
import { ISecret } from '../../types'
import Secret from './Secret'
import Header from './Header'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Loading } from './style'

export default function Home() {
  const theme = useTheme()
  const [refreshing, setRefreshing] = useState(false)

  async function onRefreshAction() {
    setRefreshing(true)

    // await loadSecrets()

    setRefreshing(false)
  }

  if (true) {
    return (
      <ContainerPd>
        <FlatList
          data={secrets}
          renderItem={({ item: secret }: ListRenderItemInfo<ISecret>) => (
            <Secret secret={secret}/>
          )}
          ListHeaderComponent={Header}
          keyExtractor={(item, index) => String(index)}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              colors={[theme.primary]}
              onRefresh={onRefreshAction}
              progressViewOffset={RFPercentage(18)}
              progressBackgroundColor={theme.secondary}
            />
          )}
        />
      </ContainerPd>
    )
  } else {
    return <Loading color={theme.primary} size={Platform.OS === 'android' ? 50 : 'large'}/>
  }
}