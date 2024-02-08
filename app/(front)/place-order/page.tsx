import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Passer la commande",
};

export default async function PlaceOrderPage() {
  return <Form />;
}
