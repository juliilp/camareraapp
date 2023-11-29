import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const getMesas = async () => {
    const info = await axios.get("/mesa/allMesas")
    const result = info.data 
   return result
} 

const useMesa = () => {
    const {data,isError,isLoading,isSuccess} = useQuery({queryKey:["mesa"], queryFn: getMesas})
    return {data,isError,isLoading,isSuccess}
}

export default useMesa