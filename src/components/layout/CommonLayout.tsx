import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export interface IChildren {
  children: ReactNode;
}

export default function CommonLayout({ children }: IChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
}
