import React from "react";

interface Props {
  switchDialog: boolean;
  setSwitchDialog: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
  isChecked: boolean;
  bannedAccount: boolean;
  onUpdateUser: (updatedUser: {
    isAdmin: boolean;
    isChecked: boolean;
    bannedAccount: boolean;
  }) => void;
}

const ModalUserDashboard: React.FC<Props> = ({
  switchDialog,
  setSwitchDialog,
  isAdmin,
  isChecked,
  bannedAccount,
  onUpdateUser,
}) => {
  const [newConfig, setNewConfig] = React.useState({
    isAdmin,
    isChecked,
    bannedAccount,
  });

  const onChangeConfig = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.checked;

    setNewConfig((prev) => ({ ...prev, [name]: value }));
  };

  const onSaveConfig = () => {
    onUpdateUser({
      isAdmin: newConfig.isAdmin,
      isChecked: newConfig.isChecked,
      bannedAccount: newConfig.bannedAccount,
    });
    setSwitchDialog((prev) => !prev);
  };

  return (
    <>
      {switchDialog && (
        <article className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0" />
          <div className="bg-white p-6 rounded shadow-lg z-10 relative">
            <button
              className="absolute top-0 right-0"
              onClick={() => setSwitchDialog((prev) => !prev)}
            >
              X
            </button>
            <article className="flex flex-col">
              <div>
                <span>isAdmin:</span>
                <input
                  type="checkbox"
                  checked={newConfig.isAdmin}
                  onChange={onChangeConfig}
                  name="isAdmin"
                />
              </div>
              <div>
                <span>isChecked:</span>
                <input
                  type="checkbox"
                  checked={newConfig.isChecked}
                  onChange={onChangeConfig}
                  name="isChecked"
                />
              </div>
              <div>
                <span>bannedAccount:</span>
                <input
                  type="checkbox"
                  checked={newConfig.bannedAccount}
                  onChange={onChangeConfig}
                  name="bannedAccount"
                />
              </div>
              <button onClick={onSaveConfig}>Guardar</button>
            </article>
          </div>
        </article>
      )}
    </>
  );
};

export default ModalUserDashboard;
