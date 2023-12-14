export interface ILogin
{
    email: string;
    password: string;
}

export interface IRegister
{
    firstName: string;
    lastName: string;
    imageBase64: string;
    email: string;
    password: string;
}

export interface IAuthResult
{
    token: string
}
