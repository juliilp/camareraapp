import axios from "axios"
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
export default function MesaID() {
  const {id} = useParams()
  const [mesaId, setMesaId] = useState()

  useEffect(() => {
    
    async function peticionMesa() {
      const res = await axios.get("/mesa/" + id)
      console.log(res)
      setMesaId(res.data)
    }
    peticionMesa()
  }, [])
  console.log(mesaId)
  return (
    <div>MesaID</div>
  )
}
