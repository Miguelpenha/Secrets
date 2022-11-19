import { FC } from 'react'
import { Container, Statistic, Value } from './style'

interface Iprops {
    value: number
}

const StatisticAnimated: FC<Iprops> = ({ children, value }) => {
    return (
        <Container activeOpacity={0.5}>
            <Statistic>{children}</Statistic>
            <Value>
                {value >= 60000 ? Number((value/60)/60).toFixed((value/60)/60 === 1 ? 0 : 1) : Number(value/60).toFixed(0)}
                {value >= 3600000 ? ` hora${(value/60)/60 === 1 ? '' : 's'}` : ` minuto${value/60 === 1 ? '' : 's'}`}
            </Value>
        </Container>
    )
}

export default StatisticAnimated