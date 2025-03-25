import Image from "next/image";
import { Marquee } from "@/components";
import { coreMemberes, additionalMembers } from "@/constants";
import { motion } from "framer-motion";
import { logo } from "@/public";

export default function Publication() {
	return (
		<>
			<section className="w-full bg-marquee padding-y rounded-t-[20px]">
				<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
					<Marquee
						title="Team"
						className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
					/>
				</div>
				{/* <div className="w-full padding-x py-[30px]">
				<div className="w-full flex justify-between gap-[20px] flex-wrap sm:flex-col xm:flex-col">
					<div>
						<h3 className="paragraph font-medium text-white font-NeueMontreal">
							Latest publication
						</h3>
					</div>
					<div className="w-[70%] flex gap-y-[20px] sm:flex-col xm:flex-col sm:w-full xm:w-full gap-[10px]">
						{coreMemberes.map((item) => (
							<div
								className="w-full flex justify-between gap-[20px] sm:flex-col xm:flex-col"
								key={item.id}>
								<div className="w-full flex gap-[20px] rounded-[20px] flex-col">
									<div className="group overflow-hidden rounded-[20px]">
										<Image
											src={item.src}
											alt="img"
											className="w-full h-full group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]	"
										/>
									</div>
									<div className="flex gap-[10px] items-center">
										<span className="w-[10px] h-[10px] rounded-full bg-white" />
										<h4 className="paragraph uppercase font-medium font-NeueMontreal text-white">
											{item.title}
										</h4>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div> */}
			</section>

			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
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
								<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
									E-Board Members
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </section> */}

			<div className="w-full padding-x py-[30px]">
				<div className="grid grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
					{coreMemberes.map((item) => (
						<div
							key={item.id}
							className="flex flex-col items-center transform transition-all duration-300 hover:translate-y-[-8px]"
						>
							<div className="w-full relative aspect-square overflow-hidden rounded-2xl shadow-md bg-white">
								<Image
									src={item.src ?? "/default-image.png"}
									alt={`${item.name}'s photo`}
									fill
									className="object-cover transform transition-transform duration-500 hover:scale-110"
								/>
							</div>
							<div className="w-full text-center mt-4 space-y-1">
								<h4 className="text-xl font-light text-gray-800 font-NeueMontreal">{item.name}</h4>
								<p className="text-sm font-bold text-[#394b3f] font-NeueMontreal">
									{item.designation}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								Contributors
							</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full padding-x py-[30px]">
				<div className="grid grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
					{additionalMembers.map((item) => (
						<div
							key={item.id}
							className="flex flex-col items-center transform transition-all duration-300 hover:translate-y-[-8px]"
						>
							<div className="w-full relative aspect-square overflow-hidden rounded-2xl shadow-md">
								<Image
									src={item.src ?? "/default-image.png"}
									alt={`${item.name}'s photo`}
									fill
									className="object-cover transform transition-transform duration-500 hover:scale-110"
								/>
							</div>
							<div className="w-full text-center mt-4 space-y-1">
								<h4 className="text-xl font-light text-gray-800 font-NeueMontreal">{item.name}</h4>
								<p className="text-sm font-bold text-gray-600 font-NeueMontreal">
									{item.designation}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
