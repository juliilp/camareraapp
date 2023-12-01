import { Link } from "react-router-dom";
import MesaInterface from "../interfaces/Mesa";

export default function MesaComponent({ _id, numeroMesa }: MesaInterface) {
  return (
    <section className="w-full max-w-[300px] h-56 border justify-center items-center flex ">
      <Link to={`mesa/${_id}`}>
        <span className="">{numeroMesa}</span>
      </Link>
    </section>
  );
}