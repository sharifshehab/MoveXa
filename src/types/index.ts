import { ComponentType } from "react";

export type { IUser, ILogin } from "./auth.type"

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

export interface IStatusLog {
  status: string
  timestamp: string
  updatedBy: string
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

export interface ITracking {
  trackingID: string
  weight: number
  senderName: string
  receiverName: string
  parcelType: string
  deliveryFee: number
  statusHistory: StatusHistory[]
}

export interface StatusHistory {
  status: string
  timestamp: string
  updatedBy: string
}

export interface IParcelReceive {
  receiveParcel: boolean
}


export type TRole = "Super_Admin" | "Admin" | "Sender" | "Receiver";

