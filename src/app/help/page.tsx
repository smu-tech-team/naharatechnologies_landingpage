
import type { Metadata } from "next";
import HelpClient from "./HelpClient";

export const metadata: Metadata = {
  title: "Help Center | Nahara Technologies PLC",
  description:
    "Find answers to frequently asked questions, troubleshooting guides, and customer support resources in the Nahara Tecnnologies Help Center.",
  icons: {
    icon: "/NaharaIcon2.ico",
  },
};


export default function Help() {
  return <HelpClient/>;
}