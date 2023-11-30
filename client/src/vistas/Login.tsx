import { useState } from "react"
import axios from 'axios'
export default function Login() {
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
    } catch (error : any) {
      console.log(error.message)
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
