import axios from "axios"


const allUsers = async () => {
    const res = await axios("/user/allUser")
    return res.data
}


export default allUsers