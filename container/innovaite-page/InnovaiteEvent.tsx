"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components";
import {
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaClock,
	FaTrophy,
	FaUsers,
	FaTicketAlt,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";

// Placeholder images (replace with actual event images)
const eventImages = [
	"/In1.jpg",
	"/In2.jpg",
	"/In3.jpg",
	"/In4.jpg",
	"/In5.jpg",
	"/In6.jpg",
	"/In7.jpg",
	"/In8.jpg",
	"/In9.jpg",
];

const InnovAIteEvent = () => {
	return (
		<section className="w-full bg-background">
			{/* Logo and Register Button Section */}
			<div className="w-full min-h-[60vh] flex items-center">
				<div className="w-full flex items-center justify-between px-12">
					{/* Logo Container - 70% */}
					<div className="w-[70%] flex justify-center items-center">
						<Image
							width={800}
							height={800}
							src={"/InnovaiteLogo.png"}
							alt="Innovaite Logo"
							className="w-[80%] object-contain transition-all duration-300"
							priority
						/>
					</div>

					{/* Button Container - 30% */}
					<div className="w-[30%] flex justify-center items-center">
						<Link
							href="https://docs.google.com/forms/d/e/1FAIpQLScdHp933j3lFSI_sqtj5tsmaPAUz4W_kOL26UPIKPzKb5hc-w/viewform"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#394b3f] text-white px-14 py-7 rounded-[30px] text-3xl font-bold font-NeueMontreal 
                hover:bg-[#a5babf] transition-all duration-300 shadow-xl hover:shadow-2xl 
                transform hover:scale-105 active:scale-95"
						>
							Register Now
						</Link>
					</div>
				</div>
			</div>

			{/* Rest of your existing content */}
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<p className="sub-heading font-medium font-NeueMontreal text-black">
					InnovAIte Hackathon is a 30-hour intensive project development event bringing together
					innovative students to solve real-world challenges through AI.
				</p>
			</div>

			{/* Event Details */}
			<div className="w-full grid grid-cols-3 gap-0 mt-12 px-12">
				<div
					className="aspect-square p-6 flex flex-col justify-center items-center"
					style={{ backgroundColor: "rgba(57, 75, 63, 0.2)" }} // #394b3f with opacity
				>
					<FaCalendarAlt className="text-6xl mb-4" style={{ color: "#394b3f" }} />
					<h2 className="text-2xl font-bold font-NeueMontreal mb-2">Event Timeline</h2>
					<p className="text-lg font-medium font-NeueMontreal  text-center">
						February 15th and 16th
					</p>
					{/* <p className="text-lg font-medium font-NeueMontreal  text-center">
						February 16th, 2025: 10:00 A.M. - 7:00 P.M.
					</p> */}
				</div>
				<div
					className="aspect-square p-6 flex flex-col justify-center items-center"
					style={{ backgroundColor: "rgba(165, 186, 191, 0.2)" }} // #a5babf with opacity
				>
					<FaMapMarkerAlt className="text-6xl mb-4" style={{ color: "#a5babf" }} />
					<h2 className="text-2xl font-bold font-NeueMontreal mb-2">Event Location</h2>
					<p className="text-lg font-medium font-NeueMontreal text-center">
						Northeastern University In-person event
					</p>
				</div>
				<div
					className="aspect-square p-6 flex flex-col justify-center items-center"
					style={{ backgroundColor: "rgba(241, 195, 71, 0.2)" }} // #f1c347 with opacity
				>
					<FaUsers className="text-6xl mb-4" style={{ color: "#f1c347" }} />
					<h2 className="text-2xl font-bold font-NeueMontreal mb-2">Team Details</h2>
					<p className="text-lg font-medium font-NeueMontreal text-center">
						Team size: 4-6 members
					</p>
				</div>
			</div>

			<div className="w-full grid grid-cols-3 gap-0 mt-0 px-12">
				<div
					className="aspect-square p-6 flex flex-col justify-center items-center"
					style={{ backgroundColor: "#dadbd9bd" }}
				>
					<FaTicketAlt className="text-6xl mb-4" style={{ color: "#a8ada2" }} />
					<h2 className="text-2xl font-bold font-NeueMontreal  mb-2">Registration</h2>
					<p className="text-lg font-medium font-NeueMontreal  text-center">$5 admission fee</p>
				</div>
				<div
					className="aspect-square p-6 flex flex-col justify-center items-center"
					style={{ backgroundColor: "#f6c3d775" }}
				>
					<FaTrophy className="text-6xl mb-4" style={{ color: "#f6c3d7" }} />
					<h2 className="text-2xl font-bold font-NeueMontreal  mb-2">Judging</h2>
					<p className="text-lg font-medium font-NeueMontreal  text-center">
          Panel of 3 distinguished industry experts Awards for winning teams 
					</p>
				</div>
				<div
					className="aspect-square p-6 flex flex-col justify-center items-center"
					style={{ backgroundColor: "#dadbd933" }}
				>
					<FaClock className="text-6xl mb-4" style={{ color: "#dadbd9" }} />
					<h2 className="text-2xl font-bold font-NeueMontreal  mb-2">Deadline</h2>
					<p className="text-lg font-medium font-NeueMontreal  text-center">TBD</p>
				</div>
			</div>

			{/* Event Photos */}
			<div className="w-full grid grid-cols-3 gap-4 mt-12 px-12">
				{eventImages.map((image, index) => (
					<div
						key={index}
						className="aspect-square relative overflow-hidden"
						style={{ backgroundColor: "rgba(57, 75, 63, 0.2)" }}
					>
						<Image
							src={image}
							alt={`Event Image ${index + 1}`}
							fill
							sizes="(max-width: 768px) 100vw, 33vw"
							className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
							priority={index < 3} // Only prioritize loading first 3 images
						/>
					</div>
				))}
			</div>

			<FAQ />
			{/* FAQ Section */}

			{/* <Organizers /> */}

			{/*Sponsors Callout*/}
			<section className="w-full mt-12 px-12 flex flex-col items-center">
				{/* Centered Heading */}
				<h2 className="text-3xl font-bold font-NeueMontreal text-[#394b3f] mb-6 text-center">
					Contact us for Sponsoring
				</h2>

				{/* Large Button */}
				<button
					className="p-6 w-full md:w-auto text-xl font-bold font-NeueMontreal text-white bg-[#f1c347] hover:bg-[#dba339] rounded-lg shadow-lg transition-all duration-300 text-center"
					onClick={() => window.open("mailto:aiclub.neu@gmail.com")}
					style={{ maxWidth: "400px" }} // Optional width limit for large screens
				>
					aiclub.neu@gmail.com
				</button>
			</section>

			{/* Contact Us */}
			<SocialIcons />
		</section>
	);
};

export default InnovAIteEvent;

const FAQ = () => {
	const [activeAccordion, setActiveAccordion] = useState(null);

	const faqItems = [
		{
			id: 1,
			question: "Who can participate?",
			answer: "Open to all current university students, no prior AI/CS experience required.",
		},
		{
			id: 2,
			question: "Team Size",
			answer: "4-10 people per team",
		},
		{
			id: 3,
			question: "Cost",
			answer: "$5 admission for eligible students",
		},
		{
			id: 4,
			question: "Judging",
			answer: "Panel of 2-3 professors from participating institutions",
		},
		{
			id: 5,
			question: "Reimbursement for Travel and accomodation",
			answer: "Sorry, we are unable to provide reimbursement for travel and accomodation this time",
		},
	];

	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	// Split items into two arrays for two columns
	const midPoint = Math.ceil(faqItems.length / 2);
	const leftColumnItems = faqItems.slice(0, midPoint);
	const rightColumnItems = faqItems.slice(midPoint);

	return (
		<section className="w-full mt-12 px-12">
			<h2 className="text-3xl font-bold font-NeueMontreal text-secondry mb-6">
				Frequently Asked Questions
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
				{/* Left Column */}
				<div>
					{leftColumnItems.map((item) => (
						<div
							key={item.id}
							className={`w-full flex py-[10px] flex-col ${
								item.id === 1 ? "border-y border-[#394b3f55]" : "border-b border-[#394b3f55]"
							}`}
						>
							<div className="w-full flex items-center justify-between py-[10px]">
								<div className="w-[90%]">
									<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
										{item.question}
									</h3>
								</div>
								<div className="w-[10%] flex items-end justify-end">
									<button
										className={`text-2xl font-normal transition-all duration-200 ease-in-out ${
											activeAccordion === item.id
												? "text-[#a5babf] transform rotate-45"
												: "text-secondry"
										}`}
										onClick={() => toggleAccordion(item.id)}
									>
										+
									</button>
								</div>
							</div>
							<div className="w-full flex justify-between">
								<div className="w-[90%]">
									<AnimatePresence>
										{activeAccordion === item.id && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{
													ease: [0.4, 0, 0.2, 1],
													duration: 1.3,
												}}
											>
												<div className="flex flex-col gap-[20px] py-[30px]">
													<p className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
														{item.answer}
													</p>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
								<div className="w-[10%]" />
							</div>
						</div>
					))}
				</div>

				{/* Right Column */}
				<div>
					{rightColumnItems.map((item) => (
						<div
							key={item.id}
							className={`w-full flex py-[10px] flex-col border-b border-[#394b3f55]`}
						>
							<div className="w-full flex items-center justify-between py-[10px]">
								<div className="w-[90%]">
									<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
										{item.question}
									</h3>
								</div>
								<div className="w-[10%] flex items-end justify-end">
									<button
										className={`text-2xl font-normal transition-all duration-200 ease-in-out ${
											activeAccordion === item.id
												? "text-[#a5babf] transform rotate-45"
												: "text-secondry"
										}`}
										onClick={() => toggleAccordion(item.id)}
									>
										+
									</button>
								</div>
							</div>
							<div className="w-full flex justify-between">
								<div className="w-[90%]">
									<AnimatePresence>
										{activeAccordion === item.id && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{
													ease: [0.4, 0, 0.2, 1],
													duration: 1.3,
												}}
											>
												<div className="flex flex-col gap-[20px] py-[30px]">
													<p className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
														{item.answer}
													</p>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
								<div className="w-[10%]" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
