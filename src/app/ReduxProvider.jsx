"use client";
import { Provider } from "react-redux";
import { store } from "@/stores/cart";
import NavBar from "./components/navBar";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <div className="bg-gradient-to-t from-gray-300 to-slate-50 w-[100vw] h-[100lvh] -z-10 fixed inset-x-0 inset-y-0"></div>
      <NavBar />
      {children}
    </Provider>
  );
}
