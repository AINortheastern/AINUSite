"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function About() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const carouselRef = useRef(null);
	const { scrollXProgress } = useScroll({ container: carouselRef });
	const x = useTransform(scrollXProgress, [0, 1], ["1%", "-95%"]);

 	const images = [
		"/AaravGambhir.jpg",
		"/AlexzanderSansiveri.png",
		"/AnthonyCampos.jpeg",
		"/BrandonButler.jpg",
		"/CharlesCiampa.jpg",
		"/DhruvReddy.jpg",
	].map((url, index) => ({
		url,
		title: `Event ${index + 1}`,
		description: `Description for event ${index + 1}`,
	}));

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.4, 0, 0.2, 1],
			},
		},
	};

	const [textRef, textInView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	const [missionRef, missionInView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	const textAnimation = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.4, 0, 0.2, 1],
			},
		},
	};

	const wordAnimation = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	const missionText = "AI Northeastern is committed to transforming the landscape of artificial intelligence at Northeastern University, Boston, and beyond by serving as a valuable resource, enhancing knowledge and understanding of AI.";
	const missionWords = missionText.split(" ");

	const nextSlide = () => {
		if (currentIndex < images.length - 1) {
			setCurrentIndex(prev => prev + 1);
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prev => prev - 1);
		}
	};

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px] overflow-hidden">
 			<motion.div
				className="absolute top-0 left-0 w-full h-full pointer-events-none"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ duration: 2 }}
			>
				<div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#f1c347] to-transparent blur-[100px]" />
				<div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-l from-[#f1c347] to-transparent blur-[100px]" />
			</motion.div>

			<motion.div
				ref={ref}
				variants={containerVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				className="max-w-[80%] mx-auto relative z-10"
			>
				<motion.div 
					ref={textRef}
					className="mb-16 relative"
				>
					<motion.div
						className="flex flex-wrap gap-2"
						initial="hidden"
						animate={textInView ? "visible" : "hidden"}
						variants={{
							visible: {
								transition: {
									staggerChildren: 0.03,
								},
							},
						}}
					>
						{missionWords.map((word, i) => (
							<motion.span
								key={i}
								variants={wordAnimation}
								className="inline-block font-medium text-3xl md:text-4xl text-white font-NeueMontreal tracking-wide leading-relaxed"
							>
								{word}
							</motion.span>
						))}
					</motion.div>
					<motion.div
						initial={{ scaleX: 0 }}
						animate={textInView ? { scaleX: 1 } : { scaleX: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="absolute -bottom-4 left-0 h-[1px] w-full bg-gradient-to-r from-[#f1c347] via-white to-transparent origin-left"
					/>
				</motion.div>

				<div className="grid grid-cols-2 gap-16 sm:grid-cols-1 xm:grid-cols-1">
					<motion.div 
						ref={missionRef}
						variants={itemVariants}
						className="space-y-8"
					>
						<motion.h1 
							initial={{ opacity: 0, x: -20 }}
							animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
							transition={{ duration: 0.6 }}
							className="text-4xl md:text-5xl font-bold text-[#f1c347] font-NeueMontreal mb-8"
						>
							What you can expect?
						</motion.h1>
						<motion.div 
							className="space-y-8"
							initial="hidden"
							animate={missionInView ? "visible" : "hidden"}
							variants={{
								visible: {
									transition: {
										staggerChildren: 0.2,
									},
								},
							}}
						>
							<motion.p 
								variants={textAnimation}
								className="text-2xl md:text-3xl font-light text-white/90 tracking-normal leading-relaxed"
							>
								<span className="font-semibold text-white">AI NU</span> hosts a weekly reading group to discuss papers in AI, bringing together
								students and experts to deepen their understanding.
							</motion.p>
							<motion.p 
								variants={textAnimation}
								className="text-2xl md:text-3xl font-light text-white/90 tracking-normal leading-relaxed"
							>
								Additionally, we organize <span className="font-semibold text-white">hackathons</span> to foster innovation and skill-building, 
								and feature <span className="font-semibold text-white">guest speakers</span> who are leaders in the field of AI.
							</motion.p>
						</motion.div>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="flex items-center justify-center relative"
					>
						<div className="max-w-xl">
							<motion.blockquote
								initial={{ scale: 0.95, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="text-4xl sm:text-5xl md:text-6xl font-bold font-NeueMontreal text-white relative italic"
							>
								<motion.span
									className="absolute -left-8 top-0 text-[#f1c347] text-8xl opacity-50"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 0.5 }}
									transition={{ delay: 0.5 }}
								>
									"
								</motion.span>
								"Artificial intelligence, deep learning, machine learning — whatever you're doing if
								you don't understand it — <span className="text-[#f1c347]">learn it</span>. Because otherwise, you're going to be a dinosaur
								within three years."
							</motion.blockquote>
							<motion.p
								variants={itemVariants}
								className="text-xl font-bold font-NeueMontreal text-white mt-8"
							>
								— Mark Cuban
							</motion.p>
						</div>
					</motion.div>
				</div>

 				<motion.div
					variants={itemVariants}
					className="mt-24 relative"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<h2 className="text-2xl font-medium text-white mb-8">Featured Moments</h2>

 					<div className="absolute right-0 top-0 flex items-center gap-4">
						<span className="text-white/70 text-sm">
							{currentIndex + 1} / {images.length}
						</span>
						<div className="flex gap-2">
							<button
								onClick={prevSlide}
								className={`p-2 rounded-full transition-all ${
									currentIndex === 0
										? "text-white/30 cursor-not-allowed"
										: "text-white hover:bg-white/10"
								}`}
								disabled={currentIndex === 0}
							>
								<ArrowLeft size={20} />
							</button>
							<button
								onClick={nextSlide}
								className={`p-2 rounded-full transition-all ${
									currentIndex === images.length - 1
										? "text-white/30 cursor-not-allowed"
										: "text-white hover:bg-white/10"
								}`}
								disabled={currentIndex === images.length - 1}
							>
								<ArrowRight size={20} />
							</button>
						</div>
					</div>

 					<div className="relative overflow-hidden group">
 						<button
							onClick={prevSlide}
							className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
							w-12 h-12 flex items-center justify-center rounded-full
							bg-black/30 backdrop-blur-sm
							transition-all duration-300
							opacity-0 group-hover:opacity-100
							${currentIndex === 0 ? 'cursor-not-allowed' : 'hover:bg-black/50'}`}
							disabled={currentIndex === 0}
						>
							<ArrowLeft size={24} className="text-white" />
						</button>

 						<button
							onClick={nextSlide}
							className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 
							w-12 h-12 flex items-center justify-center rounded-full
							bg-black/30 backdrop-blur-sm
							transition-all duration-300
							opacity-0 group-hover:opacity-100
							${currentIndex === images.length - 1 ? 'cursor-not-allowed' : 'hover:bg-black/50'}`}
							disabled={currentIndex === images.length - 1}
						>
							<ArrowRight size={24} className="text-white" />
						</button>

						<motion.div
							className="flex gap-6"
							animate={{ x: `-${currentIndex * 100}%` }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						>
							{images.map((image, i) => (
								<motion.div
									key={i}
									className="relative shrink-0 w-full rounded-2xl overflow-hidden"
									whileHover={{ scale: 0.98 }}
									transition={{ duration: 0.3 }}
								>
									<div className="w-full aspect-[16/9] relative">
										<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
										<Image
											src={image.url}
											alt={image.title}
											fill
											className="object-cover"
										/>
										<div className="absolute bottom-6 left-6 z-20 text-white">
											<h3 className="text-xl font-bold mb-2">{image.title}</h3>
											<p className="text-sm opacity-80">{image.description}</p>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>

 						<div className="flex justify-center gap-2 mt-6">
							{images.map((_, i) => (
								<button
									key={i}
									onClick={() => setCurrentIndex(i)}
									className={`w-2 h-2 rounded-full transition-all ${
										i === currentIndex ? "bg-white w-4" : "bg-white/30"
									}`}
								/>
							))}
						</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
