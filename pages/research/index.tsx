"use client";
import { useEffect } from "react";
import { Curve } from "@/components";
import Hero from "@/container/research-page/Hero";
import { motion } from 'framer-motion';
import React from 'react';

const TextSection = ({ 
	title, 
	description, 
	items, 
	fromRight = false,
	delay = 0,
	className = ""
}: {
	title: string;
	description?: string;
	items: Array<{ label: string; text: string; subText?: string; link?: string }>;
	fromRight?: boolean;
	delay?: number;
	className?: string;
}) => (
	<motion.div
		initial={{ 
			opacity: 0,
			y: 50 
		}}
		whileInView={{ 
			opacity: 1,
			y: 0
		}}
		viewport={{ once: true, margin: "-100px" }}
		transition={{ 
			type: "spring",
			stiffness: 50,
			damping: 20,
			delay: delay,
			duration: 0.8
		}}
		className={`max-w-3xl ${fromRight ? 'ml-auto mr-8 md:mr-16 lg:mr-24' : 'ml-8 md:ml-16 lg:ml-24'} mb-20 ${className}`}
		id={title.toLowerCase().replace(/\s+/g, '-')}
	>
		<div className="bg-white bg-opacity-50 rounded-2xl shadow-lg p-8 relative overflow-hidden">
			<h2 className="text-5xl font-bold mb-8 text-secondry">{title}</h2>
			{description && (
				<p className="text-xl md:text-2xl mb-10 text-secondry">{description}</p>
			)}
			<div className="space-y-8">
				{items.map((item, index) => (
					<motion.div
						key={item.label}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ 
							delay: delay + index * 0.1,
							duration: 0.5
						}}
						className="text-secondry"
					>
						<h3 className="text-xl font-bold mb-3">{item.label}</h3>
						
						{item.text.includes('https://') ? (
							<p className="text-lg">
								{item.text.split('https://')[0]}
								<a 
									href={`https://${item.text.split('https://')[1]}`} 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									https://{item.text.split('https://')[1]}
								</a>
							</p>
						) : (
							<p className="text-lg">{item.text}</p>
						)}
						
						{item.subText && (
							<motion.p 
								className="text-lg mt-6 border-l-2 border-gray-400 pl-4 italic"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: delay + index * 0.1 + 0.3 }}
							>
								{item.subText}
							</motion.p>
						)}
					</motion.div>
				))}
			</div>
		</div>
	</motion.div>
);

const CanvaImage = ({ src, className }: { src: string; className?: string }) => (
	<motion.img
		src={src}
		alt="Design element"
		className={`absolute pointer-events-none ${className}`}
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 1 }}
	/>
);

interface TeamSectionProps {
	title: string;
	coreTeam: Array<{ name: string; role: string; image: string }>;
	advisor: string;
	collaborators: string[];
	activeMembers: string | null;
	fromRight?: boolean;
	delay?: number;
}

const TeamSection = ({ 
	title, 
	coreTeam, 
	advisor,
	collaborators,
	activeMembers,
	fromRight = false,
	delay = 0 
}: TeamSectionProps) => (
	<motion.div
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: "-100px" }}
		transition={{ 
			type: "spring",
			stiffness: 50,
			damping: 20,
			delay: delay,
			duration: 0.8
		}}
		className={`max-w-3xl ${fromRight ? 'ml-auto mr-8 md:mr-16 lg:mr-24' : 'ml-8 md:ml-16 lg:ml-24'} mb-20`}
		id="team"
	>
		<div className="bg-white bg-opacity-50 rounded-2xl shadow-lg p-8 relative overflow-hidden">
			<h2 className="text-5xl font-bold mb-8 text-secondry">{title}</h2>
			
			<div className="space-y-10">
				<div>
					<h3 className="text-2xl font-bold mb-4 text-secondry">Core Team</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{coreTeam.map((member, index) => (
							<motion.div 
								key={member.name}
								className="bg-gray-50 bg-opacity-50 p-4 rounded-lg shadow-sm relative group"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: delay + index * 0.1 }}
							>
								<div className="flex items-center">
									<div className="relative mr-4 overflow-hidden rounded-full w-16 h-16">
										<img 
											src={member.image || "/placeholder-headshot.jpg"} 
											alt={member.name}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
										/>
									</div>
									<div>
										<h4 className="font-bold text-lg">{member.name}</h4>
										<p className="text-gray-600">{member.role}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
				
				<div>
					<h3 className="text-2xl font-bold mb-4 text-secondry">Advisor</h3>
					<motion.div 
						className="bg-gray-50 bg-opacity-50 p-4 rounded-lg shadow-sm relative group"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: delay + 0.3 }}
					>
						<div className="flex items-center">
							<div className="relative mr-4 overflow-hidden rounded-full w-16 h-16">
								<img 
									src="/researchTeam/ennio.png" 
									alt={advisor}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
									onError={(e) => {
										(e.target as HTMLImageElement).src = "/placeholder-headshot.jpg";
									}}
								/>
							</div>
							<h4 className="font-bold text-lg">{advisor}</h4>
						</div>
					</motion.div>
				</div>

				<div>
					<h3 className="text-2xl font-bold mb-4 text-secondry">Collaborators</h3>
					<motion.div 
						className="bg-gray-50 bg-opacity-50 p-4 rounded-lg shadow-sm"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: delay + 0.4 }}
					>
						<div className="flex flex-wrap gap-4">
							{collaborators.map((collaborator) => {
								const imageMap: {[key: string]: string} = {
									"Mert Inan": "/researchTeam/mert.png",
									"Ian Steenstra": "/researchTeam/ian.png",
									"Girik Malik": "/researchTeam/girik.png"
								};
								
								return (
									<div key={collaborator} className="group relative">
										<div className="relative overflow-hidden rounded-full w-14 h-14">
											<img 
												src={imageMap[collaborator]} 
												alt={collaborator}
												className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
												onError={(e) => {
													(e.target as HTMLImageElement).src = "/placeholder-headshot.jpg";
												}}
											/>
										</div>
										<span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
											{collaborator}
										</span>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>

				<div>
					<h3 className="text-2xl font-bold mb-4 text-secondry">Active Members</h3>
					<motion.div 
						className="bg-gray-50 bg-opacity-50 p-4 rounded-lg shadow-sm"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: delay + 0.5 }}
					>
						{activeMembers ? (
							<div className="flex flex-wrap gap-4">
								{activeMembers.split(', ').map((member, index) => (
									<div key={member} className="group relative">
										<div className="relative overflow-hidden rounded-full w-14 h-14">
											<img 
												src={`/member-${index + 1}.jpg`} 
												alt={member}
												className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
												onError={(e) => {
													(e.target as HTMLImageElement).src = "/placeholder-headshot.jpg";
												}}
											/>
										</div>
										<span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
											{member}
										</span>
									</div>
								))}
							</div>
						) : (
							<p>N/A for now</p>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	</motion.div>
);

const ProjectsSection = ({ 
	title, 
	description, 
	projects,
	fromRight = false,
	delay = 0 
}: {
	title: string;
	description?: string;
	projects: Array<{ title: string; text: string }>;
	fromRight?: boolean;
	delay?: number;
}) => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	
	const nextProject = () => {
		setActiveIndex((prev) => (prev + 1) % projects.length);
	};
	
	const prevProject = () => {
		setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
	};
	
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ 
				type: "spring",
				stiffness: 50,
				damping: 20,
				delay: delay,
				duration: 0.8
			}}
			className="w-full px-8 mb-32 py-16"
			id="projects"
		>
			<div className="bg-white bg-opacity-60 rounded-3xl shadow-xl p-12 relative overflow-hidden max-w-7xl mx-auto">
				<h2 className="text-6xl font-bold mb-10 text-secondry text-center">{title}</h2>
				{description && (
					<p className="text-2xl md:text-3xl mb-16 text-secondry text-center max-w-4xl mx-auto">{description}</p>
				)}
				
				<div className="relative">
					<div className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10">
						<button 
							onClick={prevProject}
							className="bg-white hover:bg-gray-100 rounded-full p-5 focus:outline-none transition-all shadow-lg hover:shadow-xl"
							aria-label="Previous project"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</button>
					</div>
					
					<div className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10">
						<button 
							onClick={nextProject}
							className="bg-white hover:bg-gray-100 rounded-full p-5 focus:outline-none transition-all shadow-lg hover:shadow-xl"
							aria-label="Next project"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
					
					<div className="overflow-hidden py-8">
						<motion.div 
							className="flex"
							initial={false}
							animate={{ x: `-${activeIndex * 100}%` }}
							transition={{ 
								type: "tween", 
								ease: "easeInOut", 
								duration: 0.5 
							}}
						>
							{projects.map((project, index) => (
								<motion.div 
									key={project.title}
									className="min-w-full px-8"
									initial={{ opacity: 0 }}
									animate={{ 
										opacity: 1
									}}
									transition={{ duration: 0.5 }}
								>
									<div className="bg-gray-50 bg-opacity-80 p-12 rounded-2xl shadow-lg h-full border-l-4 border-primary">
										<h3 className="text-4xl font-bold mb-8 text-primary">{project.title}</h3>
										<p className="text-2xl text-secondry leading-relaxed">{project.text}</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
					
					<div className="flex justify-center mt-12 space-x-4">
						{projects.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`w-5 h-5 rounded-full transition-all duration-300 ${
									activeIndex === index 
										? 'bg-primary scale-125 shadow-md' 
										: 'bg-gray-300 hover:bg-gray-400'
								}`}
								aria-label={`Go to project ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

const ResearchContent = () => {
	const projectsData = {
		title: "Projects",
		description: "Explore our current research initiatives or propose your own:",
		projects: [
			{
				title: "CausalVision",
				text: "Advancing semantic segmentation through causal inference and knowledge graphs to improve interpretability and robustness in image understanding, moving beyond correlation to model object interactions and contextual dependencies."
			},
			{
				title: "NLP",
				text: "Developing uncertainty-aware dialogue systems using probabilistic modeling and knowledge graphs to enable adaptive, context-sensitive conversations that reconcile ambiguity with user-specific needs."
			},
			{
				title: "Propose Research",
				text: "Inspired by a different direction in AI perception? Share your vision and lead your own project with the support of our lab's resources and mentorship."
			}
		],
		fromRight: true
	};

	const sections = [
		{
			title: "The Problem: Closed Doors, Narrow Paths",
			description: "Traditional research labs often exclude students through rigid admissions, hyper-specialized focuses, and opaque selection criteria—leaving many unsure how to begin or pivot. This exclusivity stifles exploration:",
			items: [
				{
					label: "Narrow scope",
					text: "Overly specialized projects limit interdisciplinary growth"
				},
				{
					label: "Access barriers",
					text: "Fixed application cycles and GPA cutoffs exclude self-motivated learners"
				},
				{
					label: "Uncertain fit",
					text: "Students hesitate to commit without testing diverse research approaches"
				}
			],
			fromRight: false
		},
		{
			title: "Open Exploration",
			description: "Your Research, Your Trajectory",
			items: [
				{
					label: "Continuous Intake",
					text: "Join anytime—no rigid deadlines or semesters."
				},
				{
					label: "Diverse Focus Areas",
					text: "Contribute to ongoing AI perception projects or propose your own novel ideas."
				},
				{
					label: "Purpose-Driven Impact",
					text: "Prioritize meaningful innovation and collaboration over sheer publication volume."
				}
			],
			fromRight: true
		},
		{
			title: "Mentorship",
			description: "Guidance Tailored to You",
			items: [
				{
					label: "Accessible Experts",
					text: "Consult mentors actively engaged in both academia and industry."
				},
				{
					label: "Collaborative Support",
					text: "Peer and mentor-reviewed work, cross-project workshops, and open lab resources."
				},
				{
					label: "Skill Development",
					text: "Gain expertise through collaborative coding standards and hands-on learning opportunities."
				}
			],
			fromRight: false
		},
		{
			title: "Structured Autonomy",
			description: "Progress through collaboration and contribution. Your journey in the lab follows a tiered roadmap, exposing you to the full research lifecycle:",
			items: [
				{
					label: "New Member",
					text: "Immerse yourself in lab culture and develop foundational skills."
				},
				{
					label: "Active Member",
					text: "Contribute to projects, refine your expertise, and collaborate with peers."
				},
				{
					label: "Mentor",
					text: "Guide others while deepening your technical and leadership abilities."
				},
				{
					label: "Project Lead",
					text: "Oversee research initiatives, manage resources, and drive innovation.",
					subText: "While research often involves independent work, our lab fosters a collaborative environment where consultation, discussion, and teamwork are always encouraged. Your success is driven by your intrinsic motivation and commitment to meaningful contributions surrounded by those seeking to do the same."
				}
			],
			fromRight: false
		},
		{
			title: "Publications",
			description: "Coming soon!!!",
			items: [],
			fromRight: false
		},
		{
			title: "Join Us",
			items: [
				{
					label: "1. Access the AI Club Notion",
					text: "Join Northeastern's AI Club Notion workspace: https://www.notion.so/invite/ba441204434aca1a59ff22cb546b93b1feac30b4"
				},
				{
					label: "2. Complete the Membership Access Form",
					text: "Fill out the form available on the Notion homepage to apply."
				},
				{
					label: "3. Request Lab Teamspace Access",
					text: "Submit a request to join the AI Perception Lab Teamspace through Notion. Detailed instructions are available on the Notion in case of confusion."
				},
				{
					label: "4. Await Approval",
					text: "Your request will be reviewed within 3 business days."
				}
			],
			fromRight: true
		},
		{
			title: "Team",
			items: [
				{
					label: "Core Team",
					text: "Alexzander Sansiveri (Lab Lead), Anthony Campos (Operations Manager)"
				},
				{
					label: "Advisor",
					text: "Dr. Ennio Mingolla"
				},
				{
					label: "Collaborators",
					text: "Mert Inan, Ian Steenstra, Girik Malik"
				},
				{
					label: "Active Members",
					text: "N/A for now"
				}
			],
			fromRight: false
		}
	];

	const teamData = {
		title: "Team",
		coreTeam: [
			{
				name: "Alexzander Sansiveri",
				role: "Lab Lead",
				image: "/researchTeam/alexzander.png"
			},
			{
				name: "Anthony Campos",
				role: "Operations Manager",
				image: "/researchTeam/anthony-campos.png"
			}
		],
		advisor: "Dr. Ennio Mingolla",
		collaborators: ["Mert Inan", "Ian Steenstra", "Girik Malik"],
		activeMembers: null,
		fromRight: false
	};

	const publicationsIndex = sections.findIndex(section => section.title === "Publications");
	const joinUsIndex = sections.findIndex(section => section.title === "Join Us");

	return (
		<div className="relative py-32 w-full flex flex-col">
			<CanvaImage 
				src="/canvaDesign/canvaDesign1.png"
				className="top-40 right-10 w-64 md:w-96 opacity-50 -z-10" 
			/>
			
			{sections.slice(0, publicationsIndex + 1).map((section, index) => (
				<TextSection
					key={section.title}
					{...section}
					delay={index * 0.2}
					className={section.title === "Mentorship" ? "mt-20" : ""}
				/>
			))}
			
			<ProjectsSection
				{...projectsData}
				delay={(publicationsIndex + 1) * 0.2}
			/>
			
			{sections.slice(publicationsIndex + 1).map((section, index) => (
				<TextSection
					key={section.title}
					{...section}
					delay={(publicationsIndex + 1 + index) * 0.2}
					className=""
				/>
			))}
			
			<TeamSection
				{...teamData}
				delay={sections.length * 0.2}
			/>
		</div>
	);
};

export default function Research() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll({
				smooth: true,
				lerp: 0.1,
			});

			document.querySelectorAll('[data-scroll-to]').forEach(link => {
				link.addEventListener('click', (e) => {
					e.preventDefault();
					const target = document.querySelector(
						(e.currentTarget as HTMLAnchorElement).getAttribute('href') || ''
					) as HTMLElement;
					if (target) {
						locomotiveScroll.scrollTo(target);
					}
				});
			});

			return () => {
				locomotiveScroll.destroy();
			};
		})();
	}, []);

	return (
		<div className="flex flex-col min-h-screen w-full overflow-x-hidden">
			<main className="flex-grow relative w-full">
				<Curve backgroundColor={"#F2F2F2"}>
					<Hero />
					<ResearchContent />
				</Curve>
			</main>
		</div>
	);
}
