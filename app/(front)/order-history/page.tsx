import { Metadata } from "next";
import MyOrders from "./MyOrders";

export const metadata: Metadata = {
  title: "Historique des commandes",
};
export default function OrderHistory() {
  return (
    <>
      <h1 className="text-2xl py-2">Historique des commandes</h1>
      <MyOrders />
    </>
  );
}
