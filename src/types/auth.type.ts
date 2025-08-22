export interface IUser {
    name: string
    email: string
    password: string
    role: string
    status?: string
    _id?: string
    createdAt?: string
    updatedAt?: string
}

export interface ILogin {
    accessToken: string
    refreshToken: string
    user: IUser
}

