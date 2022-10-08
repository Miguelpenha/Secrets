import { Dispatch, SetStateAction, createContext, FC, useState, useContext } from 'react'

interface IVerifiedAccessContext {
    verifiedAccess: boolean
    setVerifiedAccess: Dispatch<SetStateAction<boolean>>
}

export const VerifiedAccessContext = createContext<IVerifiedAccessContext>({} as IVerifiedAccessContext)

export const VerifiedAccessProvider: FC = ({ children }) => {
    const [verifiedAccess, setVerifiedAccess] = useState(false)
    
    return (
        <VerifiedAccessContext.Provider value={{verifiedAccess, setVerifiedAccess}}>
           {children}
        </VerifiedAccessContext.Provider>
    )
}

export function useVerifiedAccess() {
    return useContext(VerifiedAccessContext)
}

export default useVerifiedAccess