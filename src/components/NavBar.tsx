import Link from "next/link";
import React from "react";

const NavBar = ({ styling }: { styling: string }) => {
  return (
    <nav className={styling}>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/upcomingproducts">Products to be released</a>
      </li>
      <li>
        <a href="/career">Career</a>
      </li>
      <li>
        <a href="/customer">Customers</a>
      </li>
      <li>
        <a href="/help">Help</a>
      </li>
      <Link href="/contact">
        <button className="bg-black text-white font-medium px-4 py-2 inline-flex items-center justify-center tracking-tight">
          Contact Us
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
