import { ISecret } from '../../types'
import { useEffect, useState } from 'react'

function useTypes(secrets: ISecret[]) {
  const [types, setTypes] = useState<string[]>([])

  useEffect(() => {
    if (secrets) {
      const newsTypes = []

      secrets.map(secret => {
        if (!secret.hideName && secret.type) {
          if (!newsTypes.includes(secret.type)) {
            newsTypes.push(secret.type)
          }
        }
      })

      setTypes(newsTypes)
    }
  }, [secrets])

  return types
}

export default useTypes