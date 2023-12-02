import { useQuery } from "@tanstack/react-query"
import allProducts from "../utils/allProducts"


export default function useProductos() {
  
    const allProductsFn = () => allProducts()
    const {data,isError,isLoading,isSuccess, error} = useQuery({
        queryKey:["allProductos"],
        queryFn: allProductsFn
    })
  return {data,isError,isLoading,isSuccess, error}
}



