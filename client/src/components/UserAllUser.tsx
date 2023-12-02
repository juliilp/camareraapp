import React, { useState } from "react";
import ModalUserDashboard from "./ModalUserDashboard";
import axios from "axios";

interface User {
  _id: string;
  nombre: string;
  email: string;
  isAdmin: boolean;
  isChecked: boolean;
  bannedAccount: boolean;
}

const UserAllUser: React.FC<User> = ({
  email,
  isAdmin,
  isChecked,
  nombre,
  bannedAccount,
  _id,
}) => {
  const [switchDialog, setSwitchDialog] = useState<boolean>(false);

  const onUpdateUser = async (updatedUser: {
    isAdmin: boolean;
    isChecked: boolean;
    bannedAccount: boolean;
  }) => {
   const res = await  axios.put(`/user/editSettingsUser/${_id}`, {
      isChecked: updatedUser.isChecked,
      isAdmin: updatedUser.isAdmin,
      bannedAccount: updatedUser.bannedAccount,
    });
    if(res.status === 200) {
      alert("Actualiza la pagina para ver los cambios")
    }
    console.log("Usuario actualizado:", updatedUser);
  };

  const handlerDialog = () => {
    setSwitchDialog(!switchDialog);
  };
  return (
    <section className="border flex flex-col py-2">
      <article className="flex flex-col">
        <span>nombre: {nombre}</span>
        <span>email:{email}</span>
        <span>isAdmin: {isAdmin!.toString()}</span>
        <span>isChecked: {isChecked!.toString()}</span>
        <span>bannedAccount: {bannedAccount!.toString()} </span>
      </article>
      <button onClick={handlerDialog} className="w-max border p-1 bg-red-500">
        Editar cuenta
      </button>
      <ModalUserDashboard
        switchDialog={switchDialog}
        setSwitchDialog={setSwitchDialog}
        bannedAccount={bannedAccount!}
        isAdmin={isAdmin!}
        isChecked={isChecked!}
        onUpdateUser={onUpdateUser}
      />
    </section>
  );
};

export default UserAllUser;
