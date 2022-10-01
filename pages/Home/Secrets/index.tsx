import { useState } from 'react'
import { useSecrets } from '../../../contexts/secretsContext'
import useShowEmoji from '../../../contexts/emojiContext'
import { FlatList } from 'react-native'
import Header from './Header'
import Secret from './Secret'
import RefreshControl from '../../../components/RefreshControl'
import { Message } from './style'

function Secrets() {
  const [refreshing, setRefreshing] = useState(false)
  const { secrets, loadSecrets } = useSecrets()
  const { showEmoji } = useShowEmoji()

  async function onRefreshAction() {
    setRefreshing(true)

    await loadSecrets()

    setRefreshing(false)
  }

  return (
    <FlatList
      data={secrets}
      ListHeaderComponent={Header}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Secret secret={item}/>}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshAction}/>}
      ListEmptyComponent={
        <Message>Você não possui segredos cadastrados ainda{showEmoji && <> &#x1F615;</>}</Message>
      }
    />
  )
}

export default Secrets