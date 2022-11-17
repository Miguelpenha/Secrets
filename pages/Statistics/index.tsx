import { useNavigation } from '@react-navigation/native'
import useStatistic from '../../contexts/statisticContext'
import { Container, Title } from './style'
import HeaderBack from '../../components/HeaderBack'
import StatisticAnimated from './StatisticAnimated'

function Statistics() {
    const navigation = useNavigation()
    const { statistic } = useStatistic()

    return (
        <Container>
            <HeaderBack title="Estatísticas (development)" onClick={() => navigation.goBack()}/>
            <StatisticAnimated value={statistic.timeUsing}>Tempo usando o app</StatisticAnimated>
            <Title>Em breve...</Title>
        </Container>
    )
}

export default Statistics