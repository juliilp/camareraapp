interface MesaInterface {
  _id?: string;
  pedido?: any[];
  pedidoListo?: boolean;
  pedidoParaEntregar?: boolean;
  numeroMesa?: number;
  ___v?: number;
  handlerMesaActualizada?: (id: string | undefined) => void;
}

export default MesaInterface;
