"use client";
import { Provider } from "react-redux";
import { store } from "@/stores/cart";
import NavBar from "./components/navBar";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <NavBar />
      {children}
    </Provider>
  );
}
