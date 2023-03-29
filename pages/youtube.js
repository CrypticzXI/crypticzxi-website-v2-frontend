import { useEffect } from 'react'
import { useRouter } from 'next/router'
const social = ({ 
    
}) => {
    const router = useRouter()
    useEffect(() => {
        router.push('https://www.youtube.com/channel/UCRLZVGvyWy4Y4YOgR020rOw')
      }, [])
}

export default social
