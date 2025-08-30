import Link from "next/link";
import React from "react";

const NavBar = ({
  styling,
  setIsMobileNavOpen,
}: {
  styling: string;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const linkClasses =
    "relative font-semibold tracking-wide text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className={styling}>
      <>
        <Link
          onClick={() => setIsMobileNavOpen(false)}
          href="/about"
          className={linkClasses}
        >
          About
        </Link>
      </>
      <li>
        <Link
          onClick={() => setIsMobileNavOpen(false)}
          href="/career"
          className={linkClasses}
        >
          Career
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setIsMobileNavOpen(false)}
          href="/help"
          className={linkClasses}
        >
          Help
        </Link>
      </li>
      <Link
        onClick={() => setIsMobileNavOpen(false)}
        href="/contact"
      >
        <button className="bg-black text-white font-medium px-4 py-2 inline-flex items-center justify-center tracking-tight">
          Contact Us
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
