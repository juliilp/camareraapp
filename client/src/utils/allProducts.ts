import axios from "axios"

const allProducts = async () => {
    const res = await axios("/productos/allProducts")
    const data: String[] = res.data
    return data
}

export default allProducts