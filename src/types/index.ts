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

export type TRole = "Super_Admin" | "Admin" | "Sender" | "Receiver";

