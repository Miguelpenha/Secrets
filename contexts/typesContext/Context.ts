import { createContext } from 'react'
import { ITypesContext } from './type'

const TypesContext = createContext<ITypesContext>({} as ITypesContext)

export default TypesContext