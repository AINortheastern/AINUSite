"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { logo } from "@/public";

export default function Hero() {
	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px]"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								Building Tomorrow's <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="leading-[130px]">
										<Image
											src={logo}
											alt="img"
											className="w-auto max-h-[95px] object-contain rounded-[10px] mt-[10px]
												md:max-h-[63px]
												sm:max-h-[45px] 
												xm:max-h-[40px]"
											/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										Intelligence
									</h1>
								</div>
								Today.
							</h1>
						</div>
			
					</div>
		
					
					<EventBanner/>
					<div className="w-full flex flex-col h-[22vh] border-t border-[#21212155] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
								Shaping the future of AI at Northeastern University, Boston
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
									<p className="paragraph font-NeueMontreal text-secondry">
									where innovation meets excellence
									</p>
								</div>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/aboutus">
											Team Members
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] sm:p-[30px] xm:pb-[30px]  group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
											<ArrowUpRight
												size={24}
												strokeWidth={1.25}
											/>
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
								className="paragraph opacity-50 font-NeueMontreal text-secondry">
								scroll down
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
	  <div className="w-full h-[120px] relative mt-[20px]">
		{/* Background gradient stripe */}
		<div 
		  className="absolute inset-0"
		  style={{
			background: 'linear-gradient(90deg, rgb(216 203 49), rgb(237, 241, 232))'
		  }}
		/>
  
		{/* Content */}
		<div className="relative w-full h-full flex items-center justify-between px-12">
		<div className="flex items-center space-x-8 h-[17vh]">
  <div className="relative h-full w-[20vw] flex-shrink-0">
    <Image
      src="/InnovaiteLogo.png"
      alt="Innovaite Logo"
      fill
      className="object-contain"
    />
  </div>
  <div className="text-[#394b3f] font-NeueMontreal">
    <p className="text-lg font-bold">February 15-16, 2024</p>
    <p className="text-sm">Northeastern University</p>
  </div>
</div>
		  
		  <Link 
			href="/innovaite-event-page" 
			className="bg-[#394b3f] text-white px-6 py-3 rounded-full 
			  text-sm font-bold font-NeueMontreal
			  hover:bg-[#d8cb31] color-black transition-all duration-300"
		  >
			Register Now
		  </Link>
		</div>
	  </div>
	);
  };