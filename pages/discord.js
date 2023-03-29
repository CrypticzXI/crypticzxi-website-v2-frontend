import { useEffect } from 'react'
import { useRouter } from 'next/router'
const social = ({ 
    
}) => {
    const router = useRouter()
    useEffect(() => {
        router.push('https://discord.gg/Dv35P5eqax')
      }, [])
}

export default social
