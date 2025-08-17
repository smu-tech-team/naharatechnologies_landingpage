"use client";
import React from "react";

interface ContactLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, icon: Icon, text }) => {
  return (
    <a
      href={href}
      className="text-red-900 flex items-center gap-2 justify-center hover:underline"
    >
      <Icon className="text-lg" />
      <span className="text-sm sm:text-base">{text}</span>
    </a>
  );
};

export default ContactLink;
