"use client";
import { useEffect } from "react";
import { Curve } from "@/components";
import { Publicationinsights } from "@/container";

export default function Insights() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<div className="bg-background min-h-screen">
			<Publicationinsights />
		</div>
	);
}
