import { useContext } from 'react'
import TypesContext from './Context'

function useTypes() {
    return useContext(TypesContext)
}

export default useTypes