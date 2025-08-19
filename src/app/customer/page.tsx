import type { Metadata } from "next";
import Customer from "./Customer";

export const metadata: Metadata = {
  title: "Customer Page | Nahara Technologies PLC",
  description:
    "Discover how Nahara Technologies PLC supports its customers. View who our clients has been",
  keywords: [
    "Nahara Technologies customers",
    "customer support",
    "client services",
    "technology solutions",
    "customer resources",
    "account management",
  ],
  icons: {
    icon: "/NaharaIcon2.ico",
  },
};


export default function CustomerPage() {
  return <Customer/>
}