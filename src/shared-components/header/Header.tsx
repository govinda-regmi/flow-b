"use client";

import { useState } from "react";

import Image from "next/image";

const navigation = [
	{ name: "Profile", href: "#" },
	{ name: "Update", href: "#" },
	{ name: "About Us", href: "#" },
];

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<a href="#" className="-m-1.5 p-1.5">
					<span className="sr-only">Your Company</span>
					<Image
						className=" relative"
						width={100}
						height={10}
						src="/next.svg"
						alt=""
					/>
				</a>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							{item.name}
						</a>
					))}
					<a
						href="/account/"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
		</header>
	);
};
