import { useState, useEffect } from 'react'
import useSecrets from '../../contexts/secretsContext'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import Secrets from './Secrets'
import Modal from 'react-native-modal'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import Loading from '../../components/Loading'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const { secrets, loadSecrets } = useSecrets()
  const [openModalVerify, setOpenModalVerify] = useState<string | null>(null)
  const navigation = useNavigation()

  useEffect(() => {
    setLoading(true)

    loadSecrets().then()

    setLoading(false)
  }, [])

  if (secrets && !loading) {
    return (
      <ContainerPd>
        <Secrets onVerify={id => setOpenModalVerify(id)}/>
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
      </ContainerPd>
    )
  } else {
    return <Loading/>
  }
}