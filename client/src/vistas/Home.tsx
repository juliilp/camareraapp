import MesaComponent from "../components/MesaComponent";
import useMesa from "../hooks/useMesa";
import useUsers from "../hooks/useUsers";

export default function Home() {
  const { data, isError, isLoading, isSuccess } = useMesa();
  const {user, isAuthenticate} = useUsers()
  console.log(user, isAuthenticate)
  return (
    <main>
      {isError && <p>Error</p>}
      {isLoading && <p>is Loading</p>}
      {isSuccess &&
        data?.map((m) => {
          return (
            <MesaComponent key={m._id} numeroMesa={m.numeroMesa} _id={m._id} />
          );
        })}
    </main>
  );
}
