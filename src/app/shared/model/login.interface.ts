export interface ILogin {
    email: string;
    password: string;
    accessToken?: any;
    user?: {
        email: string;
        firstname: string;
        lastname: string;
    }
}

export interface IUser {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}