import { useState, useRef, useEffect } from 'react'
import useSecrets from '../../contexts/secretsContext'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import Secrets from './Secrets'
import Modal from 'react-native-modal'
import ModalVerifyPassword from '../../components/ModalVerifyPassword'
import { Modalize } from 'react-native-modalize'
import optionsModalize from '../../components/optionsModalize'
import Loading from '../../components/Loading'
import { TypeContainer, TypeText } from './style'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const { secrets, loadSecrets } = useSecrets()
  const [types, setTypes] = useState<string[]>([])
  const [type, setType] = useState('')
  const [openModalVerify, setOpenModalVerify] = useState<string | null>(null)
  const navigation = useNavigation()
  const modalizeSelectType = useRef<Modalize>(null)
  const [openModalizeSelectType, setOpenModalizeSelectType] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setLoading(true)

    loadSecrets().then()

    setLoading(false)
  }, [])

  useEffect(() => {
    if (secrets) {
      const newsTypes = []

      secrets.map(secret => {
        if (!secret.hideName) {
          if (secret.type) {
            if (!newsTypes.includes(secret.type)) {
              newsTypes.push(secret.type)
            }
          }
        }
      })

      setTypes(newsTypes)
    }
  }, [secrets])

  if (secrets && !loading) {
    return (
      <ContainerPd>
        <Secrets openModalizeSelectType={openModalizeSelectType} modalizeSelectType={modalizeSelectType} type={type} setType={setType} onVerify={id => setOpenModalVerify(id)}/>
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
        <Modalize
          ref={modalizeSelectType}
          {...optionsModalize(theme, 90, 64)}
          onOpen={() => setOpenModalizeSelectType(true)}
          onClose={() => setOpenModalizeSelectType(false)}
        >
          <TypeContainer onPress={() => {
              setType('')
              
              modalizeSelectType.current.close()
          }}>
            <TypeText>Nenhum tipo</TypeText>
          </TypeContainer>
          {types && types.map((type, index) => (
            <TypeContainer key={index} onPress={() => {
              setType(type)
              
              modalizeSelectType.current.close()
            }}>
              <TypeText>{type}</TypeText>
            </TypeContainer>
          ))}
        </Modalize>
      </ContainerPd>
    )
  } else {
    return <Loading/>
  }
}