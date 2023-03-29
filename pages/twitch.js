import { useEffect } from 'react'
import { useRouter } from 'next/router'
const social = ({ 
    
}) => {
    const router = useRouter()
    useEffect(() => {
        router.push('https://www.twitch.tv/crypticzxi')
      }, [])
}

export default social
