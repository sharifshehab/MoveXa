import { ComponentType } from "react";

export type { IUser, ILogin } from "./auth.type"
export type { IStatusLog, IParcel, IMeta, IParcelQuery, ITracking, IStatusHistory, IParcelReceive, IParcelParams } from "./parcel.type"

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export interface ITableData {
    trackingID: string
    receiverEmail: string
    senderAddress: string
    receiverAddress: string
    weight: number
    type: string
    fee: number
    payment: string
    isApproved: boolean
    currentStatus: string
    createdAt: string
}


export type TRole = "Super_Admin" | "Admin" | "Sender" | "Receiver";

