import axios from "axios";
import { useState } from "react";
export default function Registro() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const handlerSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/registro", {nombre: user.nombre, password: user.password, email: user.email}, {withCredentials: true})
      console.log(res.status)
      setUser({
        nombre: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error)
    }
  };
  const userOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };
  return (
    <main>
      <form>
        <span>Nombre</span>
        <input type="text" name="nombre" onChange={userOnChange} value={user.nombre} />
        <span>Email</span>
        <input type="email" name="email" onChange={userOnChange} value={user.email}/>
        <span>Password</span>
        <input type="password" name="password" onChange={userOnChange} value={user.password} />
        <button onClick={handlerSubmit}>Enviar</button>
      </form>
    </main>
  );
}
