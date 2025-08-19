import ContactUs from "./Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nahara Technologies PLC",
  description:
    "Get in touch with Nahara Technologies PLC. Reach our team for inquiries, support, partnerships, or business opportunities. We’re here to help you succeed.",
  icons: {
    icon: "/NaharaIcon2.ico",
  },
};


const ContactPage= () => {
  return <ContactUs/>
}
export default ContactPage;