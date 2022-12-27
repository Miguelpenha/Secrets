import { Dispatch, SetStateAction, MutableRefObject, FC, useState } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useSecrets } from '../../../contexts/secretsContext'
import usePropsRefreshControl from './usePropsRefreshControl'
import { FlatList } from 'react-native'
import ListEmpty from './ListEmpty'
import { RefreshControl } from 'react-native'
import HeaderRaw from './Header'
import Secret from './Secret'

interface Iprops {
  type: string
  onVerify: (id: string) => void
  openModalizeSelectType: boolean
  setType: Dispatch<SetStateAction<string>>
  modalizeSelectType: MutableRefObject<IHandles>
  setOpenModalizeOptions: Dispatch<SetStateAction<string | null>>
}

const Secrets: FC<Iprops> = ({ modalizeSelectType, openModalizeSelectType, setOpenModalizeOptions, type, setType, onVerify }) => {
  const { secrets } = useSecrets()
  const [find, setFind] = useState('')
  const propsRefreshControl = usePropsRefreshControl()

  return (
    <FlatList
      data={secrets}
      keyExtractor={item => item.id}
      ListEmptyComponent={ListEmpty}
      refreshControl={<RefreshControl {...propsRefreshControl}/>}
      ListHeaderComponent={<HeaderRaw setType={setType} modalizeSelectType={modalizeSelectType} openModalizeSelectType={openModalizeSelectType} find={find} type={type} setFind={setFind}/>}
      renderItem={({ item }) => {
        if (!find || (find.length >= 1 && !item.hideName)) {
          if (item.name.toUpperCase().includes(find.toUpperCase())) {
            if (!type || (item.type === type)) {
              return <Secret secret={item} onVerify={onVerify} setOpenModalizeOptions={setOpenModalizeOptions}/>
            }
          }
        }
      }}
    />
  )
}

export default Secrets