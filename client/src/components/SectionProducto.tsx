import useProductos from "../hooks/useProductos";
import QueryOpcionesProductos from "./queryOpcionesProductos";
import {useState} from 'react'
import axios from "axios";

export default function SectionProducto() {
    const { data, isSuccess } = useProductos();
    const [inputNewProducto, setInputNewProducto] = useState("");
    const onChangeInputNewProducto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
    
        setInputNewProducto(value);
      };
    
      const handlerAddProducto = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const response = confirm("Estas seguro que queres agregar el producto " + inputNewProducto + " ?")
        if(response) {
          
          const res = await axios.post("/productos/createProduct", {nombre:inputNewProducto.toString()})
          if(res.status === 200) {
            alert("Producto creado")
          }else{
            alert("Error: res.status = " + res.status )
          }
        }
      };

  return (
    <section>
        <h1 className="text-center my-6 text-3xl font-semibold">Productos</h1>
        <QueryOpcionesProductos />
        <article className="flex flex-col" >
          {isSuccess &&
            data?.map((p, index) => {
              return (
                <span className="px-2 text-xl font-semibold" key={index}>
                  {p}
                </span>
              );
            })}
          <div>
          <span className="ml-2" >Agregar producto:</span>
          <input type="text" onChange={onChangeInputNewProducto} className="outline-none border rounded-xl"  />
          <button onClick={handlerAddProducto}  className="block border bg-red-500 p-2 rounded-lg " >Agregar producto</button>
          </div>
        </article>
      </section>
  )
}
