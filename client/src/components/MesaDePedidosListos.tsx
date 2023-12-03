import axios from "axios";
import MesaInterface from "../interfaces/Mesa"

interface Props extends MesaInterface {
    funcionActualizarMesas : (id: string) => void
}

export default function MesaDePedidosListos({numeroMesa,pedido, _id, funcionActualizarMesas }: Props) {

    async function handlerPedidoListo() {
        const responseConfirm =confirm("Estas seguro/a que es la mesa " + numeroMesa + " ?")
        if(responseConfirm) {
            const res = await axios.put(`mesa/editMesa/${_id}`, {
                pedidoParaEntregar: false,
                pedidoListo: false,
                pedido: [],
              });

              if(res.status === 200) {
                funcionActualizarMesas(_id!)
              }
        }
    }
  return (
    <section className="flex h-52 w-52 border flex-col" >
        <span>Numero de Mesa : {numeroMesa}</span>
        <span>Su pedido:</span>
        <ul>
            {pedido?.map((p, index) => {
                return <li key={index} >{p}</li>
            })}
        </ul>
        <button onClick={handlerPedidoListo} >Pedido entregado</button>
    </section>
  )
}
