export interface IStatusLog {
    status: string
    timestamp: string
    updatedBy: string
    note: string
}

export interface IParcel {
    _id: string
    trackingID: string
    senderID: string
    receiverEmail: string
    senderAddress: string
    receiverAddress: string
    weight: number
    type: string
    fee: number
    payment: string
    isApproved: boolean
    currentStatus: string
    statusLog: IStatusLog[]
    createdAt: string
    updatedAt: string
}

export interface IMeta {
    page: number
    limit: number
    total: number
    totalPage: number
}

export interface IParcelQuery {
    parcels: IParcel[]
    meta: IMeta
}

export interface ITracking {
    trackingID: string
    weight: number
    senderName: string
    receiverName: string
    parcelType: string
    deliveryFee: number
    statusHistory: IStatusLog[]
}

export interface IDeliveryHistory extends ITracking {
    senderEmail: string
    receiverEmail: string
    sendFrom: string
    receivedFrom: string
    statusHistory: IStatusLog[]
}

export interface IParcelReceive {
    receiveParcel: boolean
}

export interface IParcelParams {
    senderID?: string
    receiverEmail?: string
    page?: number
    limit?: number
    searchTerm?: string
    currentStatus?: string
}



