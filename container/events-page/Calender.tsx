/**
 *
 * DO NOT REMOVE COMMENTED CODE BELOW. IT IS USED FOR FUTURE IMPLEMENTATION OF CALENDAR COMPONENT
 *
 */

/**
 * Chandus Calendar Implementation (Revamp) / Edited by Jason Balayev
 */


import { motion } from "framer-motion";

interface Event {
	title: string;
	date: string;
	time: string;
	location: string;
	description: string;
}

const sectionColors: { [key: string]: string } = {
	"HACKATHON EVENT": "#9370DB",     
	"AI BOOTCAMP SERIES": "#1E90FF",   
	"AI FORUM MEETINGS": "#4F7942",     
	"RECURRING EVENTS": "#CD853F",     
};

const Calendar = () => {
	const events = {
		// "UPCOMING EVENTS": [
			
		// ],
		"HACKATHON EVENT": [
			// {
			// 	title: "InnovAIte",
			// 	date: "February 15-16",
			// 	time: "All Day",
			// 	location: "Curry Student Center",
			// 	description: "InnovAIte hackathon event",
			// },
		],
		"AI BOOTCAMP SERIES": [
			// {
			// 	title: "Introduction to AI, Math Essentials, and Python Basics",
			// 	date: "January 22nd",
			// 	time: "6:00 PM",
			// 	location: "108 West Village G",
			// 	description: "First session of AI Bootcamp covering fundamentals",
			// },
			// {
			// 	title: "Data Preprocessing and Exploratory Data Analysis (EDA)",
			// 	date: "February 5th",
			// 	time: "6:00 PM",
			// 	location: "108 West Village G",
			// 	description: "Learn about data preparation and analysis techniques",
			// },
			// {
			// 	title: "Supervised Learning Basics: Regression & Classification",
			// 	date: "February 19th",
			// 	time: "6:00 PM",
			// 	location: "108 West Village G",
			// 	description: "Introduction to fundamental machine learning concepts",
			// },
			// {
			// 	title: "Neural Networks and Model Evaluation",
			// 	date: "March 12th",
			// 	time: "6:00 PM",
			// 	location: "108 West Village G",
			// 	description: "Deep learning fundamentals and model assessment",
			// },
		],
		"AI FORUM MEETINGS": [
			// {
			// 	title: "General Discussion Meeting",
			// 	date: "January 29th",
			// 	time: "6:00 pm",
			// 	location: "108 West Village G",
			// 	description: "Monthly general discussion meeting",
			// },
			// {
			// 	title: "General Meeting",
			// 	date: "February 12th",
			// 	time: "6:00 pm",
			// 	location: "108 West Village G",
			// 	description: "Regular general meeting",
			// },
			// {
			// 	title: "General Meeting",
			// 	date: "February 26th",
			// 	time: "6:00 pm",
			// 	location: "108 West Village G",
			// 	description: "Regular general meeting",
			// },
			// {
			// 	title: "E-Board Elections",
			// 	date: "March 19th",
			// 	time: "6:00 pm",
			// 	location: "108 West Village G",
			// 	description: "Executive Board Elections",
			// },
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
		<div className="w-full bg-[#F2F2F2] py-24">
			<div className="w-full max-w-6xl mx-auto px-8">
				<div className="text-center mb-16">
					<h2 className="text-[#212121] text-5xl md:text-6xl font-FoundersGrotesk font-bold uppercase tracking-tight">
						Calendar
					</h2>
					<div className="w-24 h-1 bg-[#394b3f] mx-auto mt-4 rounded-full"/>
				</div>

				<div 
					className="border border-[#21212120] rounded-xl shadow-lg p-8 overflow-y-auto bg-white"
					style={{
						maxHeight: '600px',
						scrollbarWidth: 'thin',
						scrollbarColor: '#394b3f #e5e5e5',
						WebkitOverflowScrolling: 'touch',
					}}
					onWheel={(e) => {
						e.stopPropagation();
						const container = e.currentTarget;
						container.scrollTop += e.deltaY;
					}}
				>
					{Object.entries(events).map(([section, dateEvents]) => (
						<div key={section} className="mb-12">
							<div 
								className="border-b-2 py-3 mb-6"
								style={{ borderColor: sectionColors[section] }}
							>
								<h3 
									className="text-xl font-FoundersGrotesk font-semibold"
									style={{ color: sectionColors[section] }}
								>
									{section}
								</h3>
							</div>

							{dateEvents.map((event, index) => (
								<motion.div
									key={index}
									whileHover={{
										backgroundColor: `${sectionColors[section]}15`,
										x: 10,
									}}
									className="border-b border-[#21212120] last:border-b-0 p-6 cursor-pointer transition-all rounded-lg"
								>
									<div className="flex flex-col gap-4">
										<div className="flex justify-between items-start">
											<div className="space-y-2">
												<div className="text-xl font-semibold text-[#212121]">{event.title}</div>
												<div 
													className="text-base"
													style={{ color: sectionColors[section] }}
												>
													{event.location}
												</div>
											</div>
											<div className="text-right">
												<div 
													className="text-sm font-medium"
													style={{ color: sectionColors[section] }}
												>
													{event.date}
												</div>
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
						width: 8px;
					}
					div::-webkit-scrollbar-track {
						background: #e5e5e5;
						border-radius: 4px;
					}
					div::-webkit-scrollbar-thumb {
						background-color: #394b3f;
						border-radius: 4px;
						border: 2px solid #ffffff;
						min-height: 40px;
					}
					div::-webkit-scrollbar-thumb:hover {
						background-color: #2a3a2f;
					}
				`}</style>
			</div>
		</div>
	);
};

export default Calendar;
