"use client";
import {
	Heroworkiz,
	Chelenge,

} from "@/container";
import { useEffect } from "react";
import { Curve, Ready, Footer } from "@/components";

export default function Work() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Heroworkiz />
				<Chelenge />
				<Ready />
			</Curve>
			<Footer />
		</>
		
	);
}
