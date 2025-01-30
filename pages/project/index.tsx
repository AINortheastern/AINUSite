"use client";
import { useEffect, useState } from "react";
import { Curve, Footer, Marquee } from "@/components";
import { projectItem } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { logo } from "@/public";

export default function Work() {
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<section className="w-full">
					<div className="w-full bg-marquee padding-y rounded-t-[20px]">
						<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
							<Marquee
								title="Projects"
								className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
							/>
						</div>
					</div>
					<div className="w-full bg-[#F2F2F2] padding-y">
						<div className="w-full margin padding-x">
							<div className="max-w-[80%] mx-auto">
								<div className="flex items-center gap-[20px]">
									<motion.div
										initial={{ opacity: 0, x: -50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.8,
											delay: 0.5,
											ease: [0.16, 1, 0.3, 1],
										}}
									>
										<Image
											src={logo}
											alt="NUAI Logo"
											className="w-auto max-h-[95px] object-contain rounded-[10px] mt-[10px]
												md:max-h-[63px]
												sm:max-h-[45px] 
												xm:max-h-[40px]"
										/>
									</motion.div>
									<h1 className="heading text-[120px] md:text-[180px] tracking-[-3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase mb-4">
										Featured Projects
									</h1>
								</div>
							</div>
						</div>
					</div>
					<section className="w-full bg-[#F2F2F2] pb-24">
						<div className="max-w-[80%] mx-auto">
							{projectItem.map((item) => (
								<div key={item.id} className="relative w-full max-w-[90%] mx-auto">
									<div
										className="relative w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
										onMouseEnter={() => setHovered(true)}
										onMouseLeave={() => setHovered(false)}
									>
										<div className="aspect-[21/10] relative">
											<Image
												src={item.src}
												alt={item.title}
												fill
												className="object-cover transform transition-transform duration-700 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-30" />
										</div>
										<div className="absolute bottom-8 left-8 z-10">
											<h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
											<div className="flex gap-3">
												{item.links.map((link) => (
													<span
														key={link.id}
														className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full 
                                                     text-white hover:bg-white/20 transition-colors duration-300 cursor-default"
													>
														{link.title}
													</span>
												))}
											</div>
										</div>
										<div
											className="absolute w-fit flex top-[40%] left-1/2 transform -translate-x-1/2 
                                        overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
										>
											{item.title.split("").map((char, i) => (
												<motion.span
													key={i}
													initial={{ y: "100%" }}
													animate={hovered ? { y: 0 } : { y: "100%" }}
													transition={{
														delay: i * 0.04,
														duration: 0.5,
														ease: [0.4, 0, 0.2, 1],
													}}
													className="text-[165px] leading-none inline-block uppercase 
                                                font-FoundersGrotesk text-[#f1c347] font-bold text-center 
                                                drop-shadow-lg"
												>
													{char}
												</motion.span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				</section>
			</Curve>
		</>
	);
}
