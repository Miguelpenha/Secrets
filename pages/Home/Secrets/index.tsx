import { useState } from 'react'
import { FlatList } from 'react-native'
import { useSecrets } from '../../../contexts/secretsContext'
import useShowEmoji from '../../../contexts/emojiContext'
import Header from './Header'
import Secret from './Secret'
import { Message } from './style'
import RefreshControl from '../../../components/RefreshControl'

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
          ListEmptyComponent={
            <Message>Você não possui segredos cadastrados ainda{showEmoji && <> &#x1F615;</>}</Message>
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefreshAction}
            />
          }
        />
    )
}

export default Secrets