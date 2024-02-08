import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Méthode de payement",
};

export default async function PayementPage() {
  return <Form />;
}
