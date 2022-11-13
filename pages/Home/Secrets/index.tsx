import { MutableRefObject, FC, useState, memo } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useSecrets } from '../../../contexts/secretsContext'
import useShowEmoji from '../../../contexts/emojiContext'
import { FlatList } from 'react-native'
import HeaderRaw from './Header'
import Secret from './Secret'
import RefreshControl from '../../../components/RefreshControl'
import { Message } from './style'

interface Iprops {
  type: string
  onVerify: (id: string) => void
  openModalizeSelectType: boolean
  modalizeSelectType: MutableRefObject<IHandles>
}

const Secrets: FC<Iprops> = ({ modalizeSelectType, openModalizeSelectType, type, onVerify }) => {
  const [refreshing, setRefreshing] = useState(false)
  const { secrets, loadSecrets } = useSecrets()
  const { showEmoji } = useShowEmoji()
  const [find, setFind] = useState('')

  async function onRefreshAction() {
    setRefreshing(true)

    await loadSecrets()

    setRefreshing(false)
  }

  return (
    <FlatList
      data={secrets}
      keyExtractor={item => item.id}
      ListHeaderComponent={<HeaderRaw modalizeSelectType={modalizeSelectType} openModalizeSelectType={openModalizeSelectType} find={find} type={type} setFind={setFind}/>}
      renderItem={({ item }) => {
        if (!find || (find.length >= 1 && !item.hideName)) {
          if (item.name.toUpperCase().includes(find.toUpperCase())) {
            if (!type || (item.type === type)) {
              return <Secret secret={item} onVerify={onVerify}/>
            }
          }
        }
      }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshAction}/>}
      ListEmptyComponent={
        <Message>Você não possui segredos cadastrados ainda{showEmoji && <> &#x1F615;</>}</Message>
      }
    />
  )
}

export default memo(Secrets)