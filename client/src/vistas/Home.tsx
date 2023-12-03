import MesaComponent from "../components/MesaComponent";
import useMesa from "../hooks/useMesa";
export default function Home() {
  const { data, isError, isLoading, isSuccess } = useMesa();

  return (
    <main> 
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
