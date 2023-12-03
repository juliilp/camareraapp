import { useEffect, useState } from "react";
import useMesa from "../hooks/useMesa";
import MesaInterface from "../interfaces/Mesa";
import MesaChef from "../components/MesaChef";

export default function Chef() {
  const [mesasListas, setMesasListas] = useState<MesaInterface[]>();
  const { data, isError, isLoading, isSuccess } = useMesa();

  useEffect(() => {
    if (isSuccess) {
      const mesasFiltradas = data?.filter((m) => m.pedidoListo === true);
      setMesasListas(mesasFiltradas);
    }
  }, [isLoading, isSuccess]);

  const handleMesaActualizada = (mesaId: string | undefined) => {
    setMesasListas(
      (prevMesas) => prevMesas && prevMesas.filter((m) => m._id !== mesaId)
    );
  };
  console.log(mesasListas)
  return (
    <section>
      {isError && <p>Error</p>}
      {isLoading && <p>Cargando</p>}

      {isSuccess &&
        mesasListas!.length > 0 ? mesasListas?.map((m: MesaInterface) => (
          <MesaChef
            key={m._id}
            pedido={m.pedido}
            _id={m._id}
            numeroMesa={m.numeroMesa}
            handlerMesaActualizada={() => handleMesaActualizada(m._id)}
          />
        )) : <h2>No hay pedidos para completar</h2>}
    </section>
  );
}
