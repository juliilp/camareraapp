import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MesaInterface from "../interfaces/Mesa";
export default function MesaID() {
  const { id } = useParams();
  const [mesaId, setMesaId] = useState<MesaInterface>();
  const [allProducts, setAllProducts] = useState<string[]>();
  const [newPedido, setNewPedido] = useState<string[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function allPromise() {
      try {
        const [mesaResponse, allProducts] = await Promise.all([
          await axios.get("/mesa/" + id),
          await axios.get("/productos/allProducts"),
        ]);
        const mesaData = mesaResponse.data.findMesa;
        const productsData = allProducts.data;
        setMesaId(mesaData);
        setAllProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    }
    allPromise();
  }, []);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectPedido = e.target.value;

    if (!newPedido.includes(selectPedido)) {
      setNewPedido([...newPedido, selectPedido]);
    } else {
      const updatedPedido = newPedido.filter((p) => p !== selectPedido);
      setNewPedido(updatedPedido);
    }
  };

  const handlerEnviarDatos = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const infoConfirm = confirm("Estas seguro de enviar los datos?");
    if (infoConfirm) {
      try {
        const res = await axios.put(`mesa/editMesa/${id}`, {
          pedidoListo: true,
          pedido: newPedido,
          pedidoParaEntregar: false,
        });
        if (res.status === 200) {
          alert("Datos enviados");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <section>
      <span>Estas en la mesa: {mesaId && mesaId.numeroMesa}</span>
      <article onChange={onChangeSelect}>
        {allProducts &&
          allProducts.map((p, index) => {
            return (
              <article key={index}>
                <input value={p} type="checkbox" />
                <span>{p}</span>
              </article>
            );
          })}
      </article>

      <p>Así va a quedar el producto:</p>
      {newPedido && newPedido}

      <button onClick={handlerEnviarDatos}>Enviar pedido</button>
    </section>
  );
}
