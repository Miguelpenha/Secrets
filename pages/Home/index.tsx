import { useState, useRef, useEffect } from 'react'
import useSecrets from '../../contexts/secretsContext'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import Secrets from './Secrets'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import { Modalize } from 'react-native-modalize'
import Loading from '../../components/Loading'
import useTypes from './useTypes'
import ModalizeSelectType from './ModalizeSelectType'
import ModalizeOptions from './ModalizeOptions'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const { secrets, loadSecrets } = useSecrets()
  const [typeSelect, setTypeSelect] = useState('')
  const types = useTypes(secrets)
  const [openModalVerify, setOpenModalVerify] = useState<string | null>(null)
  const navigation = useNavigation()
  const modalizeSelectType = useRef<Modalize>(null)
  const modalizeOptions = useRef<Modalize>(null)
  const [openModalizeSelectType, setOpenModalizeSelectType] = useState(false)
  const [openModalizeOptions, setOpenModalizeOptions] = useState<string | null>()

  useEffect(() => {
    openModalizeOptions && modalizeOptions.current.open()
  }, [openModalizeOptions])

  useEffect(() => {
    setLoading(true)

    loadSecrets().then()

    setLoading(false)
  }, [])

  if (secrets && !loading) {
    return (
      <ContainerPd>
        <Secrets
          type={typeSelect}
          onVerify={id => setOpenModalVerify(id)}
          modalizeSelectType={modalizeSelectType}
          openModalizeSelectType={openModalizeSelectType}
          setOpenModalizeOptions={setOpenModalizeOptions}
        />
        <ModalVerifyPassword
          hideToastFinal
          id={openModalVerify}
          openModal={openModalVerify}
          setOpenModal={setOpenModalVerify}
          onSubmit={id => navigation.navigate('Secret', { id })}
        />
        <ModalizeSelectType
          types={types}
          modalize={modalizeSelectType}
          setTypeSelect={setTypeSelect}
          setOpenModalize={setOpenModalizeSelectType}
        />
        <ModalizeOptions modalize={modalizeOptions} setOpenModalize={setOpenModalizeOptions}/>
      </ContainerPd>
    )
  } else {
    return <Loading/>
  }
}