import { useEffect, useState } from "react";
import MesaComponent from "../components/MesaComponent";
import useMesa from "../hooks/useMesa";
import { Link } from "react-router-dom";
// import useUsers from "../hooks/useUsers";

export default function Home() {
  const { data, isError, isLoading, isSuccess } = useMesa();
  // const { user, isAuthenticate } = useUsers();
  const [pedidoListo, setPedidoListo] = useState<number>(0);

  useEffect(() => {
    const pedidos = data && data?.filter((m) => m.pedidoParaEntregar === true);
    setPedidoListo(pedidos ? pedidos.length : 0);
  }, [data]);
  
  return (
    <main>
      <Link to="/pedidoListo" >
      <span className="font-semibold text-xl fixed top-0 right-6" >Pedidos Terminados: {pedidoListo}</span>
      </Link>
      {isError && <p>Error</p>}
      {isLoading && <p>is Loading</p>}
      {isSuccess &&
        data?.map((m) => (
          <MesaComponent
            key={m._id}
            numeroMesa={m.numeroMesa}
            _id={m._id}
            pedido={m.pedido}
          />
        ))}
    </main>
  );
}
