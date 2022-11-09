import { useState, useRef, useEffect } from 'react'
import useSecrets from '../../contexts/secretsContext'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import Secrets from './Secrets'
import Modal from 'react-native-modal'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import { Modalize } from 'react-native-modalize'
import Loading from '../../components/Loading'
import useTypes from './useTypes'
import ModalizeSelectType from './ModalizeSelectType'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const { secrets, loadSecrets } = useSecrets()
  const [typeSelect, setTypeSelect] = useState('')
  const types = useTypes(secrets)
  const [openModalVerify, setOpenModalVerify] = useState<string | null>(null)
  const navigation = useNavigation()
  const modalizeSelectType = useRef<Modalize>(null)
  const [openModalizeSelectType, setOpenModalizeSelectType] = useState(false)

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
        />
        <Modal
          isVisible={openModalVerify ? true : false}
          onBackdropPress={() => setOpenModalVerify(null)}
          onBackButtonPress={() => setOpenModalVerify(null)}
        >
          <ModalVerifyPassword
            hideToastFinal
            id={openModalVerify}
            setOpenModal={setOpenModalVerify}
            onSubmit={id => navigation.navigate('Secret', { id })}
          />
        </Modal>
        <ModalizeSelectType
          types={types}
          modalize={modalizeSelectType}
          setTypeSelect={setTypeSelect}
          setOpenModalize={setOpenModalizeSelectType}
        />
      </ContainerPd>
    )
  } else {
    return <Loading/>
  }
}