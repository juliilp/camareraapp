import MesaDePedidosListos from "../components/MesaDePedidosListos"
import useMesa from "../hooks/useMesa"
import MesaInterface from "../interfaces/Mesa"
import {useEffect, useState} from 'react'
export default function Mosa() {
  const {data, isSuccess} = useMesa()
  const [mesasPedidoListo, setMesasPedidoListo] = useState<MesaInterface[]>()
  const pedidoListo = data?.filter((m) => m.pedidoParaEntregar === true)
  useEffect(() => {
    if(isSuccess) {
      setMesasPedidoListo(pedidoListo)
    }
  },[isSuccess])

  function funcionActualizarMesa(mesaId:string) {
      setMesasPedidoListo((prev) => prev?.filter((m) => m._id !== mesaId))
  }
  console.log(mesasPedidoListo)
  return (
    <main>

      {
       mesasPedidoListo && mesasPedidoListo.length > 0 ? mesasPedidoListo?.map((mesa, index) => {
          return <MesaDePedidosListos 
          funcionActualizarMesas={funcionActualizarMesa}
          numeroMesa={mesa.numeroMesa} pedido={mesa.pedido} key={index} _id={mesa._id} />
        }) : <p>No hay pedidos terminados</p>
      }
    </main>
  )
}
