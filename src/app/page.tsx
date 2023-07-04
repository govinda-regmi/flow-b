"use client";

import { Alert } from "flowbite-react";

export default function Home() {
	return (
		<>
			<Alert className="mt-5" color="info">
				Alert! Flowbite Alert
			</Alert>
			<Alert className="mt-5" color="red">
				Alert!
			</Alert>
			<Alert className="mt-5" color="success">
				Alert!
			</Alert>
			<Alert className="mt-5" color="pink">
				Alert!
			</Alert>
		</>
	);
}
