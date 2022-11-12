import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'

function Statistics() {
    const navigation = useNavigation()

    return (
        <ContainerPd>
            <HeaderBack title="Estatísticas (development)" onClick={() => navigation.goBack()}/>
            <Title>Em breve...</Title>
        </ContainerPd>
    )
}

export default Statistics