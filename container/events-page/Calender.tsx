/**
 *
 * DO NOT REMOVE COMMENTED CODE BELOW. IT IS USED FOR FUTURE IMPLEMENTATION OF CALENDAR COMPONENT
 *
 */

/**
 * Chandus Calendar Implementation (Revamp) / Changed by Jason Balayev
 */


import { motion } from "framer-motion";

interface Event {
	title: string;
	date: string;
	time: string;
	location: string;
	description: string;
}

const Calendar = () => {
	const events = {
		"UPCOMING EVENTS": [
			// {
			// 	title: "AI Forum Kickoff",
			// 	date: "January 13th",
			// 	time: "7:30 pm",
			// 	location: "INV 013",
			// 	description: "First AI Forum session of the semester",
			// },
			// {
			// 	title: "AI Perception Lab First Meeting",
			// 	date: "January 14th",
			// 	time: "8:30 pm",
			// 	location: "Richards Hall 235",
			// 	description: "Initial meeting for AI Perception Lab",
			// },
			// {
			// 	title: "Kickoff Meeting",
			// 	date: "January 15th",
			// 	time: "6:00 pm",
			// 	location: "108 West Village G",
			// 	description: "General kickoff meeting",
			// },
			// {
			// 	title: "AI Bootcamp Session #1",
			// 	date: "January 22nd",
			// 	time: "6:00 pm",
			// 	location: "108 West Village G",
			// 	description: "First bootcamp session",
			// },
			{
				title: "AI Forum Session #1",
				date: "January 27th",
				time: "7:30 pm",
				location: "INV 013",
				description: "First regular AI Forum session",
			},
		],
		"HACKATHON EVENT": [
			{
				title: "InnovAIte",
				date: "February 15-16",
				time: "All Day",
				location: "Curry Student Center",
				description: "InnovAIte hackathon event",
			},
		],
		"AI BOOTCAMP SERIES": [
			{
				title: "Introduction to AI, Math Essentials, and Python Basics",
				date: "January 22nd",
				time: "6:00 PM",
				location: "108 West Village G",
				description: "First session of AI Bootcamp covering fundamentals",
			},
			{
				title: "Data Preprocessing and Exploratory Data Analysis (EDA)",
				date: "February 5th",
				time: "6:00 PM",
				location: "108 West Village G",
				description: "Learn about data preparation and analysis techniques",
			},
			{
				title: "Supervised Learning Basics: Regression & Classification",
				date: "February 19th",
				time: "6:00 PM",
				location: "108 West Village G",
				description: "Introduction to fundamental machine learning concepts",
			},
			{
				title: "Neural Networks and Model Evaluation",
				date: "March 12th",
				time: "6:00 PM",
				location: "108 West Village G",
				description: "Deep learning fundamentals and model assessment",
			},
		],
		"GENERAL MEETINGS": [
			{
				title: "General Discussion Meeting",
				date: "January 29th",
				time: "6:00 pm",
				location: "108 West Village G",
				description: "Monthly general discussion meeting",
			},
			{
				title: "General Meeting",
				date: "February 12th",
				time: "6:00 pm",
				location: "108 West Village G",
				description: "Regular general meeting",
			},
			{
				title: "General Meeting",
				date: "February 26th",
				time: "6:00 pm",
				location: "108 West Village G",
				description: "Regular general meeting",
			},
			{
				title: "E-Board Elections",
				date: "March 19th",
				time: "6:00 pm",
				location: "108 West Village G",
				description: "Executive Board Elections",
			},
		],
		"RECURRING EVENTS": [
			{
				title: "AI Perception Lab Meetings",
				date: "Every Tuesday",
				time: "8:30 pm",
				location: "Richards Hall 235",
				description: "Weekly AI Perception Lab meetings",
			},
		],
	};

	return (
		<div className="w-full max-w-6xl mx-auto px-8 pt-4 pb-48">
			<div 
				className="border border-[#21212120] rounded-lg shadow-lg p-8 overflow-y-auto"
				style={{
					maxHeight: '600px',
					backgroundColor: '#F2F2F2',
					scrollbarWidth: 'thin',
					scrollbarColor: '#394b3f #e5e5e5',
					WebkitOverflowScrolling: 'touch',
				}}
				onWheel={(e) => {
					e.stopPropagation();  // Prevent page scrolling
					const container = e.currentTarget;
					container.scrollTop += e.deltaY;
				}}
			>
				{Object.entries(events).map(([section, dateEvents]) => (
					<div key={section} className="mb-12">
						<div className="border-b border-black py-3 mb-6">
							<h3 className="text-lg font-medium">{section}</h3>
						</div>

						{dateEvents.map((event, index) => (
							<motion.div
								key={index}
								whileHover={{
									backgroundColor: "#ffffff",
									x: 10,
								}}
								className="border-b border-[#21212155] last:border-b-0 p-6 cursor-pointer transition-all hover:bg-white"
							>
								<div className="flex flex-col gap-4">
									<div className="flex justify-between items-start">
										<div className="space-y-2">
											<div className="text-xl font-medium">{event.title}</div>
											<div className="text-base text-gray-600">{event.location}</div>
										</div>
										<div className="text-right">
											<div className="text-sm font-medium text-[#394b3f]">{event.date}</div>
											<div className="text-sm text-gray-500">{event.time}</div>
										</div>
									</div>
									<p className="text-sm text-gray-600">{event.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				))}
			</div>

			<style jsx>{`
				div::-webkit-scrollbar {
					width: 12px;
				}
				div::-webkit-scrollbar-track {
					background: #e5e5e5;
					border-radius: 6px;
					margin: 4px;
				}
				div::-webkit-scrollbar-thumb {
					background-color: #394b3f;
					border-radius: 6px;
					border: 2px solid #f2f2f2;
					min-height: 40px;
				}
				div::-webkit-scrollbar-thumb:hover {
					background-color: #2a3a2f;
				}
			`}</style>
		</div>
	);
};

export default Calendar;
