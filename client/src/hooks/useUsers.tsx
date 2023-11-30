import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


const useUsers = () => {
    const user = useSelector((state:RootState) => state.user )
    return user
}


export default useUsers