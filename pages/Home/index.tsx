import { useState, useEffect } from 'react'
import useSecrets from '../../contexts/secretsContext'
import ContainerPd from '../../components/ContainerPd'
import Secrets from './Secrets'
import Loading from '../../components/Loading'
import Modal from 'react-native-modal'
import ModalVerify from './ModalVerify'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const { secrets, loadSecrets } = useSecrets()
  const [openModalVerify, setOpenModalVerify] = useState<string | null>(null)

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
          <ModalVerify setOpenModal={setOpenModalVerify} id={openModalVerify}/>
        </Modal>
      </ContainerPd>
    )
  } else {
    return <Loading/>
  }
}