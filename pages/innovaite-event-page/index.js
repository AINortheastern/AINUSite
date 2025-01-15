"use client";
import { useEffect } from "react";
import { Curve } from "@/components";
import { InnovAIteEvent, HeroInnovaite } from "@/container";

export default function Innovaite() {
	// useEffect(() => {
	// 	(async () => {
	// 		const LocomotiveScroll = (await import("locomotive-scroll")).default;
	// 		const locomotiveScroll = new LocomotiveScroll();
	// 	})();
	// }, []);
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<HeroInnovaite />
				<InnovAIteEvent />
			</Curve>
		</>
	);
}
