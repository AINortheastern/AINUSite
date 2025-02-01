/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { Curve, Footer, Marquee } from "@/components";
import { projectItem } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { logo } from "@/public";

export default function Work() {
	const [hovered, setHovered] = useState<number | null>(null);
	const [flippedCards, setFlippedCards] = useState<number[]>([]);

	const toggleFlip = (id: number) => {
		setFlippedCards(prev => 
			prev.includes(id) 
				? prev.filter(cardId => cardId !== id)
				: [...prev, id]
		);
	};

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
								<div key={item.id} className="relative w-full max-w-[90%] mx-auto mb-16">
									<div
										className={`relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700 ${
											flippedCards.includes(item.id) ? 'rotate-y-180' : ''
										}`}
										style={{ transformStyle: 'preserve-3d' }}
										onClick={() => toggleFlip(item.id)}
									>
	
										<div 
											className="relative w-full backface-hidden group"
											onMouseEnter={() => setHovered(item.id)}
											onMouseLeave={() => setHovered(null)}
										>
											<div className="aspect-[21/10] relative overflow-hidden rounded-2xl shadow-lg">
												<Image
													src={item.src}
													alt={item.title}
													fill
													className="object-cover transform transition-transform duration-700 group-hover:scale-105"
												/>
												<div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-30" />
												
												<div className="absolute top-6 right-6 flex items-center gap-4 transition-opacity duration-300 group-hover:opacity-0">
													{item.links.map((link) => (
														<span
															key={link.id}
															className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full 
																text-white text-lg font-medium font-NeueMontreal
																border border-white/30 shadow-lg
																transition-all duration-300"
														>
															{link.title}
														</span>
													))}
												</div>

												<div className="absolute top-6 right-6 flex items-center gap-2 text-white 
													bg-[#f1c347] backdrop-blur-md px-6 py-3 rounded-full
													border border-white/30 shadow-lg
													hover:bg-[#f8d575] hover:scale-105
													transition-all duration-300 opacity-0 group-hover:opacity-100">
													<span className="text-lg font-medium">Click to flip</span>
													<motion.svg 
														width="24" 
														height="24" 
														viewBox="0 0 24 24"
														animate={{ rotateY: [0, 180] }}
														transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
														className="fill-current"
													>
														<path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
													</motion.svg>
												</div>

												<motion.div
													className="absolute bottom-6 right-6 w-16 h-16 rounded-full 
														bg-[#f1c347] backdrop-blur-md
														flex items-center justify-center
														border border-white/30 shadow-lg
														hover:bg-[#f8d575] hover:scale-105
														transition-all duration-300 opacity-0 group-hover:opacity-100"
													animate={{
														y: [0, -10, 0],
														opacity: [0, 1, 0]
													}}
													transition={{
														duration: 2,
														repeat: Infinity,
														ease: "easeInOut"
													}}
												>
													<svg 
														width="32" 
														height="32" 
														viewBox="0 0 24 24" 
														className="fill-white transform rotate-180"
													>
														<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
													</svg>
												</motion.div>

												<div className="absolute inset-0 flex items-center justify-center 
													transition-opacity duration-500 group-hover:opacity-0">
													<h2 className="text-[200px] font-bold text-white font-FoundersGrotesk 
														tracking-tight drop-shadow-lg text-center px-8 leading-none uppercase">{item.title}</h2>
												</div>

												<div className="absolute w-fit flex top-[40%] left-1/2 transform -translate-x-1/2 
													overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
												>
													{item.title.split("").map((char, i) => (
														<motion.span
															key={i}
															initial={{ y: "100%" }}
															animate={hovered === item.id ? { y: 0 } : { y: "100%" }}
															transition={{
																delay: i * 0.04,
																duration: 0.5,
																ease: [0.4, 0, 0.2, 1],
															}}
															className="text-[200px] leading-none inline-block uppercase 
															font-FoundersGrotesk text-[#f1c347] font-bold text-center 
															drop-shadow-lg"
														>
															{char}
														</motion.span>
													))}
												</div>
											</div>
										</div>

 										<div 
											className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 
												rounded-2xl shadow-lg overflow-hidden"
										>
											<div className="relative p-16 h-full bg-gradient-to-br from-white to-[#f8f8f8] text-[#212121]">
 												<div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-20 rounded-bl-full bg-[#f1c347]" />
												<div className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-15 rounded-tr-full bg-[#f1c347]" />
												
 												<div className="absolute top-0 left-0 w-4 h-full bg-[#f1c347]" />

												<motion.h3 
													initial={{ opacity: 0, y: 20 }}
													animate={flippedCards.includes(item.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
													transition={{ duration: 0.5, delay: 0.2 }}
													className="text-7xl font-bold mb-12 font-FoundersGrotesk leading-tight relative z-10"
												>
													{item.title}
												</motion.h3>
												
												<motion.p 
													initial={{ opacity: 0, y: 20 }}
													animate={flippedCards.includes(item.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
													transition={{ duration: 0.5, delay: 0.4 }}
													className="text-3xl leading-relaxed text-gray-700 mb-12 font-NeueMontreal"
												>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
													incididunt ut labore et dolore magna aliqua.
												</motion.p>
												
												<motion.div 
													initial={{ opacity: 0, y: 20 }}
													animate={flippedCards.includes(item.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
													transition={{ duration: 0.5, delay: 0.6 }}
													className="space-y-8"
												>
													<h4 className="text-4xl font-bold text-[#dba339] font-FoundersGrotesk">
														Key Features
													</h4>
													<ul className="space-y-8">
														{item.features?.map((feature, index) => (
															<motion.li 
																key={index} 
																className="flex items-center gap-6"
																initial={{ opacity: 0, x: -20 }}
																animate={flippedCards.includes(item.id) ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
																transition={{ delay: 0.8 + (index * 0.1) }}
															>
																<div className="relative">
																	<span className="absolute inset-0 bg-[#dba339] rounded-full opacity-20 animate-pulse"></span>
																	<span className="relative block w-4 h-4 bg-[#dba339] rounded-full"></span>
																</div>
																<span className="text-2xl text-gray-800 font-NeueMontreal tracking-wide">
																	{feature}
																</span>
															</motion.li>
														))}
													</ul>
												</motion.div>

												<motion.button 
													initial={{ opacity: 0, y: 20 }}
													animate={flippedCards.includes(item.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
													transition={{ duration: 0.5, delay: 1 }}
													className="absolute bottom-16 right-16 px-10 py-5 bg-[#f1c347] hover:bg-[#f8d575]
														text-[#212121] rounded-full transition-colors
														text-2xl font-bold font-NeueMontreal group flex items-center gap-3"
													onClick={(e) => {
														e.stopPropagation();
														toggleFlip(item.id);
													}}
												>
													Back to Project
													<motion.span
														animate={{ x: [0, 5, 0] }}
														transition={{ duration: 1, repeat: Infinity }}
														className="text-3xl rotate-180"
													>
														→
													</motion.span>
												</motion.button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
					
					{/* New CTA section with adjusted spacing */}
					<div className="max-w-[80%] mx-auto mt-32 mb-48 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8 }}
							className="space-y-12 pb-24"
						>
							<h2 className="text-5xl font-FoundersGrotesk font-bold text-[#212121]">
								Get involved with any of our projects!
							</h2>
							<p className="text-2xl font-NeueMontreal text-gray-700 mb-8">
								If you don't see one that matches your skill set, pitch your own idea here
							</p>
							<a 
								href="https://forms.gle/Js7u1RBWhf8Ksj488"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-12 py-6 bg-[#f1c347] hover:bg-[#f8d575] 
									text-[#212121] rounded-full transition-all duration-300
									text-2xl font-bold font-NeueMontreal group"
							>
								<span className="flex items-center gap-3">
									Submit Your Idea
									<motion.span
										animate={{ x: [0, 5, 0] }}
										transition={{ duration: 1, repeat: Infinity }}
										className="text-3xl"
									>
										→
									</motion.span>
								</span>
							</a>
						</motion.div>
					</div>
				</section>
			</Curve>
		</>
	);
}
