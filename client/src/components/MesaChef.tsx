import axios from "axios";
import MesaInterface from "../interfaces/Mesa";

interface MesaChefProps extends MesaInterface {
  handlerMesaActualizada?: (id: string | undefined) => void;
}

export default function MesaChef({
  pedido,
  _id,
  handlerMesaActualizada,
  numeroMesa,
}: MesaChefProps) {
  const handlerMesaTerminada = async () => {
    const responseConfirm = confirm(
      `Estas seguro de terminar el pedido de la mesa ${numeroMesa}?`
    );
    if (responseConfirm) {
      const res = await axios.put(`mesa/editMesa/${_id}`, {
        pedidoParaEntregar: true,
        pedidoListo: false,
      });
      if (res.status === 200 && typeof handlerMesaActualizada === "function") {
        handlerMesaActualizada(_id);
      }
    }
  };

  return (
    <section className="border  h-[250px] w-[250px]">
      Mesa número: {numeroMesa}
      <ul>
        {pedido?.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
      <button onClick={handlerMesaTerminada}>Mesa terminada</button>
    </section>
  );
}
