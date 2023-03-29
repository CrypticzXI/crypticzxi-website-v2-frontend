import { useEffect } from 'react'
import { useRouter } from 'next/router'
const social = ({ 
    
}) => {
    const router = useRouter()
    useEffect(() => {
        router.push('https://github.com/CrypticzXI')
      }, [])
}

export default social
