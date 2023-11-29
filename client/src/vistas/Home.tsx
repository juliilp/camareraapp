import useMesa from "../hooks/useMesa"

export default function Home() {
  const {data} = useMesa()
  console.log(data)
  return (
    <main>
      hola
    </main>
  )
}
