import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import useMesa from '../hooks/useMesa';
export default function ContadorPedidosTerminados() {
  const [pedidoListo, setPedidoListo] = useState<number>(0);
  const {data} = useMesa()
  useEffect(() => {
    const pedidos = data && data?.filter((m) => m.pedidoParaEntregar === true);
    setPedidoListo(pedidos ? pedidos.length : 0);
  }, [data]);
  return (
    <Link to="/pedidoListo" >
      <span className="font-semibold text-xl fixed top-0 right-6" >Pedidos Terminados: {pedidoListo}</span>
      </Link>
  )
}
