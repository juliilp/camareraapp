import useProductos from "../hooks/useProductos";

export default function QueryOpcionesProductos() {
  const { isError, isLoading, error } = useProductos();
  return (
    <article>
      {isError && <span>{error?.message}</span>}
      {isLoading && <span>Loading</span>}
    </article>
  );
}
