import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Adresse de livraison",
};

export default async function ShippingPage() {
  return <Form />;
}
