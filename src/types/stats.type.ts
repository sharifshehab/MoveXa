export interface IStats {
    _id: string
    count: number
}

export interface IParcelStats {
    totalParcel: number
    parcelByStatus: IStats[]
}

export interface IUserStats {
    totalUsers: number
    userByRole: IStats[]
}
export interface IPaymentStats {
    totalPayment: number
    paymentByStatus: IStats[]
}

