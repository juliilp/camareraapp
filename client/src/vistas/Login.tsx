import { useState} from "react"
import axios from 'axios'
import { useDispatch} from "react-redux"
import { addUser,AuthenticateTrue } from "../redux/slices/userSlice"
import { useNavigate } from "react-router-dom"
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
      if(res.status === 200) {
        dispatch(addUser(res.data.user))
        dispatch(AuthenticateTrue())
        navigate("/")
      }
      
    } catch (error ) {
      console.log(error)
    }
    setUser({
      email:"",
      password:""
    })
  }

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
