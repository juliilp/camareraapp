import useUsers from "./useUsers"
import { useQuery } from "@tanstack/react-query";
import {useEffect} from 'react'

export default function useAllUsers() {
    const {allUser} = useUsers()

    const allUserFunction = () => allUser

    const {data,isError,isLoading,isSuccess} = useQuery({
        queryKey:["allUser"],
        queryFn: allUserFunction
    })

    useEffect(() => {
        
    },[])
  return {data,isError,isLoading,isSuccess}
    
  
}
