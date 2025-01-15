"use client";
import { Eventscalender, Heroevents } from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Services() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#F2F2F2"}>
				<Heroevents />
				<Eventscalender />
			</Curve>
		</>
	);
}
