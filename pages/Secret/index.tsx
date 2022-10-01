import { useRoute, useNavigation } from '@react-navigation/native'
import { IParams } from './types'
import { useSecret } from '../../contexts/secretsContext'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import limitText from '../../utils/limitText'
import { Icon, Value } from './style'
import Loading from '../../components/Loading'
import ButtonDeleteAnimated from './ButtonDeleteAnimated'

function Secret() {
    const { id } = useRoute().params as IParams
    const secret = useSecret(id)
    const navigation = useNavigation()
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title={secret && limitText(secret.name, 32)}/>
            {secret ? <>
                <ButtonDeleteAnimated/>
                <Icon name={secret.icon} size={35}/>
                <Value>{secret.value}</Value>
            </> : <Loading/>}
        </ContainerPd>
    )
}

export default Secret