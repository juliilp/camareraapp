import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MesaInterface from "../interfaces/Mesa";

const getMesas = async () => {
  const info = await axios.get("/mesa/allMesas");
  const result: MesaInterface[] = info.data;
  return result;
};

const useMesa = () => {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["mesa"],
    queryFn: getMesas,
  });
  return { data, isError, isLoading, isSuccess };
};

export default useMesa;
