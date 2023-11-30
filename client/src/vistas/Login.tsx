import { useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../redux/slices/userSlice"
import { RootState } from "../redux/store"
export default function Login() {
  const dispatch = useDispatch()
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
  const state = useSelector((state: RootState) => state.user)
  console.log(state.user)
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
