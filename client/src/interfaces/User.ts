interface User {
    id?: string;
    email?: string;
    nombre?: string;
    isAdmin?: boolean;
    isChecked?: boolean;
    bannedAccount?: boolean;
    password?: string;
}

export type  {User}