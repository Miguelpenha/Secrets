import { useState, useEffect } from 'react'
import useSecrets from '../../contexts/secretsContext'
import ContainerPd from '../../components/ContainerPd'
import Secrets from './Secrets'
import Loading from '../../components/Loading'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const { secrets, loadSecrets } = useSecrets()

  useEffect(() => {
    setLoading(true)

    loadSecrets().then()

    setLoading(false)
  }, [])

  if (secrets && !loading) {
    return (
      <ContainerPd>
        <Secrets/>
      </ContainerPd>
    )
  } else {
    return <Loading/>
  }
}