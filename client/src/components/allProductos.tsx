
interface Props {
    nombre: string
}
export default function allProductos({nombre}: Props) {
  return (
    <span>{nombre}</span>
  )
}
