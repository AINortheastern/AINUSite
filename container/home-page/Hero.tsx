"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { logo } from "@/public";
import { useEffect, useState } from "react";

const AIDecorations = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [windowWidth, setWindowWidth] = useState<number | null>(null);

	useEffect(() => {
		setIsMounted(true);
		setWindowWidth(window.innerWidth);

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	if (!isMounted) return null;

	return (
		<div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none z-0">
 			<motion.div 
				className="absolute top-0 left-0 w-full h-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
			>
 				<div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 
					w-[800px] h-[400px] 
					bg-gradient-to-b from-[#f1c34733] via-[#FFD70022] to-transparent 
					blur-[120px]" 
				/>

 				<div className="absolute top-0 left-[5%] 
					w-[500px] h-[500px] 
					bg-gradient-to-br from-[#f1c34744] via-[#FFA50033] to-transparent 
					blur-[140px]" 
				/>

 				<div className="absolute top-[5%] right-[5%] 
					w-[400px] h-[400px] 
					bg-gradient-to-bl from-[#FFD70044] via-[#f1c34722] to-transparent 
					blur-[130px]" 
				/>

 				<motion.div
					className="absolute top-[30%] left-[20%] 
						w-[300px] h-[300px] 
						bg-gradient-to-r from-[#FFA50022] via-[#f1c34722] to-transparent 
						blur-[100px]"
					animate={{
						opacity: [0.5, 0.8, 0.5],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>

				<motion.div
					className="absolute top-[20%] right-[25%] 
						w-[250px] h-[250px] 
						bg-gradient-to-l from-[#FFD70022] via-[#f1c34722] to-transparent 
						blur-[90px]"
					animate={{
						opacity: [0.4, 0.7, 0.4],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1
					}}
				/>
			</motion.div>

 			{windowWidth && [...Array(8)].map((_, i) => (
				<motion.div
					key={i}
					className={`absolute w-4 h-4 rounded-full 
						${i % 3 === 0 
							? "bg-gradient-to-r from-[#f1c34744] to-[#f1c34722]" 
							: i % 3 === 1 
								? "bg-gradient-to-r from-[#FFD70044] to-[#FFD70022]" 
								: "bg-gradient-to-r from-[#FFA50044] to-[#FFA50022]"
						}
						blur-[3px]
					`}
					initial={{ 
						x: Math.random() * (windowWidth || 0),
						y: -20,
						opacity: 0,
						scale: 0
					}}
					animate={{ 
						y: 500,
						opacity: [0, 0.8, 0],
						scale: [0, 1, 0]
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						delay: i * 2,
						ease: "easeInOut"
					}}
				/>
			))}
		</div>
	);
};

export default function Hero() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px] relative overflow-hidden"
			data-scroll
			data-scroll-speed="-.3"
		>
			{isMounted && <AIDecorations />}

			{isMounted && (
				<motion.div 
					className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
				>
					<div className="absolute top-0 left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-b from-[#f1c34755] to-transparent blur-[120px]" />
					<div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-b from-[#f1c34744] to-transparent blur-[90px]" />
					<div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-[#f1c34722] to-transparent blur-[140px]" />
				</motion.div>
			)}

			<div className="w-full h-full flex flex-col justify-between relative z-10">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div>
							{isMounted ? (
								<motion.h1 
									className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
								>
									Building Tomorrow's <br />
									<div className="flex items-center gap-[5px]">
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
										<span>Intelligence</span>
									</div>
									Today.
								</motion.h1>
							) : (
								<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase opacity-0">
									Building Tomorrow's <br />
									<div className="flex items-center gap-[5px]">
										<div>
											<Image
												src={logo}
												alt="NUAI Logo"
												className="w-auto max-h-[95px] object-contain rounded-[10px] mt-[10px]
													md:max-h-[63px]
													sm:max-h-[45px] 
													xm:max-h-[40px]"
											/>
										</div>
										<span>Intelligence</span>
									</div>
									Today.
								</h1>
							)}
						</div>
					</div>

					{isMounted && <EventBanner />}
					<div className="w-full flex flex-col h-[22vh] border-t border-[#21212155] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								{isMounted && (
									<motion.p 
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.3 }}
										className="text-[2.2rem] md:text-[1.8rem] sm:text-[1.5rem] xm:text-[1.3rem] 
											font-NeueMontreal text-[#212121] font-light tracking-tight leading-[1.1]
											relative z-10"
									>
										Shaping the future of 
										<span className="text-[#f1c347] font-bold relative inline-block mx-2">
											AI
											{isMounted && (
												<motion.div 
													className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#f1c347] opacity-80"
													initial={{ scaleX: 0 }}
													animate={{ scaleX: 1 }}
													transition={{ duration: 0.8, delay: 0.6 }}
												/>
											)}
										</span>
										at Northeastern University, Boston
									</motion.p>
								)}
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
								</div>
								<div className="flex items-center gap-[15px] group">
									<div className="rounded-[50px] border-2 border-[#21212199] group-hover:bg-secondry 
										py-[16px] px-[32px] cursor-pointer transition-all duration-300 
										hover:shadow-[6px_6px_0px_0px_rgba(33,33,33,0.8)]
										hover:translate-x-[-3px] hover:translate-y-[-3px]">
										<Link
											className="text-[1.4rem] font-medium font-NeueMontreal text-secondry 
												uppercase group-hover:text-background transition-all transform 
												duration-[0.3s] ease-[.215,.61,.355,1] whitespace-nowrap"
											href="/aboutus"
										>
											Team Members
										</Link>
									</div>
									<div className="w-[55px] h-[55px] flex items-center justify-center 
										border-2 border-[#21212199] rounded-full p-[1px] 
										group-hover:bg-secondry transition-all transform 
										duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer 
										hover:shadow-[6px_6px_0px_0px_rgba(33,33,33,0.8)]
										hover:translate-x-[-3px] hover:translate-y-[-3px]
										xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
											<ArrowUpRight size={32} strokeWidth={1.5} />
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "100%", opacity: 0.5 }}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph opacity-50 font-NeueMontreal text-secondry"
							>
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const EventBanner = () => {
	return (
		<div className="w-full h-[200px] relative mt-[20px] group">
			<div className="absolute inset-0 rounded-[40px] mx-8 
				bg-[#f1f1f1] border-[3px] border-[#212121] 
				shadow-[8px_8px_0px_0px_rgba(33,33,33,0.8)]
				transition-all duration-300 
				group-hover:shadow-[12px_12px_0px_0px_rgba(33,33,33,0.8)]
				group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]"
			/>

			<div className="relative w-full h-full flex items-center justify-between px-16">
				<div className="flex items-center space-x-16">
					<div className="relative h-[140px] w-[500px]">
					<Image
									width={800}
									height={800}
									src={"/InnovaiteLogo.png"}
									alt="Innovaite Logo"
									className="w-[80%] object-contain mix-blend-darken"
									priority
								/>
					</div>

					<div className="text-[#394b3f] font-NeueMontreal">
						<p className="text-3xl font-bold tracking-tight mb-3">
							February 15-16, 2025
						</p>
						<p className="text-xl opacity-90">
							Northeastern University
						</p>
					</div>
				</div>

				<Link
					href="/innovaite-event-page"
					className="p-6 text-xl font-bold font-NeueMontreal 
					text-white bg-[#394b3f] hover:bg-[#2a3a2f] 
					rounded-lg shadow-lg transition-all duration-300
					transform hover:scale-105 active:scale-95"
				>
					Apply Here
				</Link>
			</div>
		</div>
	);
};
