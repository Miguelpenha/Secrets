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
                {value >= 1800 ? Number((value/30)/60).toFixed((value/30)/60 === 1 ? 0 : 1) : Number(value/30).toFixed(0)}
                {value >= 1800 ? ` hora${(value/30)/60 === 1 ? '' : 's'}` : ` minuto${value/30 === 1 ? '' : 's'}`}
            </Value>
        </Container>
    )
}

export default StatisticAnimated