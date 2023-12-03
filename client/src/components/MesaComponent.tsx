import { Link } from "react-router-dom";
import MesaInterface from "../interfaces/Mesa";

export default function MesaComponent({ _id, numeroMesa, pedido }: MesaInterface) {
  return (
    <section className={"w-full max-w-[300px] h-56 border border-black justify-center items-center flex"}>
      <Link to={`mesa/${_id}`}>
        <span className="">{numeroMesa}</span>
      </Link>
      {
        pedido?.length! > 0 && <span>Tiene pedido</span>
      }
    </section>
  );
}
