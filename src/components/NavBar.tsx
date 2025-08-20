import Link from "next/link";
import React from "react";

const NavBar = ({
	styling,
	setIsMobileNavOpen,
}: {
	styling: string;
	setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<nav className={styling}>
			<>
				<Link onClick={() => setIsMobileNavOpen(false)} href='/about'>
					About
				</Link>
			</>
			<li>
				<Link
					onClick={() => setIsMobileNavOpen(false)}
					href='/upcomingproducts'>
					Products to be released
				</Link>
			</li>
			<li>
				<Link onClick={() => setIsMobileNavOpen(false)} href='/career'>
					Career
				</Link>
			</li>
			<li>
				<Link onClick={() => setIsMobileNavOpen(false)} href='/customer'>
					Customers
				</Link>
			</li>
			<li>
				<Link onClick={() => setIsMobileNavOpen(false)} href='/help'>
					Help
				</Link>
			</li>
			<Link onClick={() => setIsMobileNavOpen(false)} href='/contact'>
				<button className='bg-black text-white font-medium px-4 py-2 inline-flex items-center justify-center tracking-tight'>
					Contact Us
				</button>
			</Link>
		</nav>
	);
};

export default NavBar;
