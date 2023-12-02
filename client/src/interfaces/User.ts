interface User {
  _id?: string;
  email?: string;
  nombre?: string;
  isAdmin?: boolean;
  isChecked?: boolean;
  bannedAccount?: boolean;
  password?: string;
}

export type { User };
