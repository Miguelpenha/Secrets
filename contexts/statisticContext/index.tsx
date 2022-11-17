import { IStatistic } from '../../types'
import { createContext, FC, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import defaultStatistic from './defaultStatistic'

interface IStatisticContext {
    statistic: IStatistic
    loadStatistic: () => Promise<void>
    setStatistic: (statistic: IStatistic) => Promise<void>
}

export const StatisticContext = createContext<IStatisticContext>({} as IStatisticContext)

export const StatisticProvider: FC = ({ children }) => {
    const [statistic, setStatistic] = useState<IStatistic>()

    async function setStatisticOnStorage(statistic: IStatistic) {
        AsyncStorage.setItem('@secrets:statistic', JSON.stringify(statistic))

        setStatistic(statistic)
    }
    
    async function loadStatistic() {
        const statistic = await AsyncStorage.getItem('@secrets:statistic')

        if (statistic) {
            setStatisticOnStorage(JSON.parse(statistic))
        } else {
            setStatisticOnStorage(defaultStatistic)
        }
    }

    useEffect(() => {
        loadStatistic().then()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            statistic && setStatisticOnStorage({
                timeUsing: statistic.timeUsing+1
            })
        }, 1000)
    }, [statistic])
    
    return (
        <StatisticContext.Provider value={{statistic, setStatistic: setStatisticOnStorage, loadStatistic}}>
           {children}
        </StatisticContext.Provider>
    )
}

export function useStatistic() {
    return useContext(StatisticContext)
}

export default useStatistic