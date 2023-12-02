import { useState, useEffect } from "react"
import axios from 'axios'
import { useDispatch} from "react-redux"
import { addUser } from "../redux/slices/userSlice"
import useUsers from "../hooks/useUsers"
import { useNavigate } from "react-router-dom"
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isAuthenticate} = useUsers()
  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  
  const handlerSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()
      const res = await axios.post("/user/login", {email: user.email, password: user.password}, {withCredentials: true})
      console.log(res.data)
      dispatch(addUser(res.data.user))
      
    } catch (error ) {
      console.log(error)
    }
    setUser({
      email:"",
      password:""
    })
  }

  useEffect(() => {
    if(isAuthenticate){
      navigate("/")
    }
  },[isAuthenticate])
  return (
    <main>
      <form >
        <div>
          <span>Email</span>
          <input type="email"  name="email" onChange={onChangeInput} value={user.email}  />
        </div>
        <div>
          <span>Password</span>
          <input type="password"  name="password" onChange={onChangeInput} value={user.password} />
        </div>
        <button onClick={handlerSubmit} >Enviar</button>
      </form>
    </main>
  )
}
