import { useState } from "react";
import { User } from "../interfaces/User";
export default function UserAllUser({
  email,
  isAdmin,
  isChecked,
  nombre,
  bannedAccount,
}: User) {
const [switchDialog, setSwitchDialog] = useState<boolean>(false)
  function handlerDialog() {
    setSwitchDialog(!switchDialog)
  }
  return (
    <section className="border flex flex-col py-2">
      <article className="flex flex-col ">
        <span>nombre: {nombre}</span>
        <span>email:{email}</span>
        <span>isAdmin: {isAdmin!.toString()}</span>
        <span>isChecked: {isChecked!.toString()}</span>
        <span>bannedAccount: {bannedAccount!.toString()} </span>
      </article>
        <button  onClick={handlerDialog} className="w-max border p-1 bg-red-500">Editar cuenta</button>
        <dialog open={switchDialog} className="w-[300px] h-[300px] fixed border ">
          <h2>hola</h2>
        </dialog>
    </section>
  );
}

