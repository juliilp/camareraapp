import useUsers from "./useUsers"
import { useQuery } from "@tanstack/react-query";

export default function useAllUsers() {
    const {allUser} = useUsers()

    const allUserFunction = () => allUser

    const {data,isError,isLoading,isSuccess} = useQuery({
        queryKey:["allUser"],
        queryFn: allUserFunction
    })

  return {data,isError,isLoading,isSuccess}
    
  
}
