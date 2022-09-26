import { useTheme } from 'styled-components'
import { useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import { FlatList, ListRenderItemInfo, RefreshControl, Platform } from 'react-native'
import { ISecret } from '../../types'
import Secret from './Secret'
import Header from './Header'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Message, Loading } from './style'
import useSecrets from '../../contexts/secretsContext'
import useShowEmoji from '../../contexts/emojiContext'

export default function Home() {
  const theme = useTheme()
  const [refreshing, setRefreshing] = useState(false)
  const { secrets } = useSecrets()
  const { showEmoji } = useShowEmoji()

  async function onRefreshAction() {
    setRefreshing(true)

    // await loadSecrets()

    setRefreshing(false)
  }

  if (secrets) {
    return (
      <ContainerPd>
        <FlatList
          data={secrets}
          ListEmptyComponent={() => <Message>Você não possui segredos cadastrados ainda{showEmoji && <> &#x1F615;</>}</Message>}
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