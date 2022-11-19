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

    async function setStatisticOnStorage(newStatistic: IStatistic) {
        AsyncStorage.setItem('@secrets:statistic', JSON.stringify(newStatistic))

        setStatistic(() => newStatistic)
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
        const interval = setInterval(() => {
            setStatistic(statistic => {
                AsyncStorage.setItem('@secrets:statistic', JSON.stringify({...statistic, timeUsing: statistic.timeUsing+1} as IStatistic))
                
                return {...statistic, timeUsing: statistic.timeUsing+1}
            })
        }, 1000)
            
        return () => clearInterval(interval)
    }, [])
    
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