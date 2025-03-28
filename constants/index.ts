import {
	alexzanderSansiveri,
	charlesCiampa,
	janakMunshi,
	kerissaDuliga,
	aaravGambhir,
	julieKim,
	naomiWiley,
	aditiRathi,
	nickVoyzey,
	anthonyCampos,
	ashrithaReddyKallem,
	nakulRajpal,
	swarmscape,
	oliviaZhou,
	logo,
	matthewGarcia,
	// muskanBhatt,
	jasonBalayev,
	averyDarlington,
	dhruvReddy,
	maximIlin,
} from "@/public";
import { StaticImageData } from "next/image";

// Navbar
export const navbarItems = [
	{
		id: 1,
		title: "Team Members",
		href: "/aboutus",
	},
	{
		id: 2,
		title: "Events",
		href: "/events",
	},
	{
		id: 3,
		title: "InnovAIte",
		href: "/innovaite-event-page",
	},
	{
		id: 4,
		title: "Projects",
		href: "/project",
	},
	{
		id: 5,
		title: "Research",
		href: "/research",
	},
];

// Footer

export const footerItems = [
	{
		id: 1,
		title: "Discord",
		href: "https://discord.gg/fCVWX4789J",
	},
	{
		id: 2,
		title: "Email",
		href: "mailto:aiclub.neu@gmail.com",
	},
	{
		id: 3,
		title: "Instagram",
		href: "https://www.instagram.com/ainortheastern/",
	},
	{
		id: 4,
		title: "LinkedIn",
		href: "https://www.linkedin.com/company/ai-nu",
	},
	{
		id: 5,
		title: "Linktree",
		href: "https://linktr.ee/ainortheastern",
	},

	{
		id: 6,
		title: "Join Our Mailing List",
		href: "https://forms.gle/sbLvQCE87BVajgm5A",
	},
	{
		id: 7,
		title: "YouTube",
		href: "https://www.youtube.com/channel/UCkmHzNA5L3UJZlHSnggu7Eg",
	},
];

export const footernavbarItems = [
	{
		id: 1,
		title: "Home",
		href: "/",
	},

	{
		id: 2,
		title: "Team Members",
		href: "aboutus",
	},
	{
		id: 3,
		title: "Events",
		href: "events",
	},
	{
		id: 4,
		title: "InnovAIte",
		href: "innovaite-event-page",
	},
	{
		id: 5,
		title: "Projects",
		href: "project",
	},
	// {
	// 	id: 6,
	// 	title: "Research",
	// 	href: "/research",
	// },
];

interface ProjectItem {
	id: number;
	title: string;
	src: StaticImageData;
	links: { id: number; title: string; }[];
	description: string;
	features: string[];
	projectLink: string;
}

export const projectItem: ProjectItem[] = [
	{
		id: 1,
		title: "SwarmScape",
		src: swarmscape,
		links: [
			{ id: 1, title: "Computer Vision" },
			{ id: 2, title: "Machine Learning" },
		],
		description: `Swarmscape is an AI Club initiative dedicated to tackling global food scarcity by transforming greenhouse farming through swarm robotics and Google Vertex AI. Our around-the-clock automated greenhouse system employs robots to gather environmental data, detect pests and diseases, and optimize plant growth. A Raspberry Pi 4 equipped with a camera captures plant images, while a Pololu 3pi+ handles greenhouse navigation. All collected data is processed in Google Vertex AI for real-time decisions, boosting harvest efficiency and sustainability. Anyone can contribute. Join us to help revolutionize modern agriculture.`,
		features: [
			"Finalizing code for robots to navigate a greenhouse",
			"Building an AI through Vertex AI for data analysis and automated decision-making",
			"Testing drones to capture aerial data for improved insights"
		],
		projectLink: "https://github.com/your-repo-link"
	},
	// ... other projects
];

// Core Items
export const coreMemberes = [
	{
		id: 1,
		name: "Alexzander Sansiveri",
		designation: "President",
		src: alexzanderSansiveri,
	},
	{
		id: 2,
		name: "Charlie Ciampa",
		designation: "Vice President",
		src: charlesCiampa,
	},
	{
		id: 3,
		name: "Janak Munshi",
		designation: "Treasurer",
		src: janakMunshi,
	},
	{
		id: 4,
		name: "Nick Voyzey",
		designation: "Marketing Head",
		src: nickVoyzey, 
	},
	{
		id: 5,
		name: "Aditi Rathi",
		designation: "Marketing Head",
		src: aditiRathi, 
	},
	{
		id: 6,
		name: "Kerissa Duliga",
		designation: "Outreach Chair",
		src: kerissaDuliga,
	},
	{
		id: 7,
		name: "Aarav Gambhir",
		designation: "Event Coordinator",
		src: aaravGambhir,
	},
	{
		id: 8,
		name: "Anthony Campos",
		designation: "Event Coordinator",
		src: anthonyCampos, 
	},
	{
		id: 9,
		name: "Nakul Rajpal",
		designation: "Secretary",
		src: nakulRajpal,  
	},
	
];

// Additional Members
export const additionalMembers = [
	// {
	//   id: 10,
	//   name: "Mihalis Koutouvos",
	//   designation: "Content Creator",
	//   src: mihalisKoutouvos,
	// },
	{
		id: 11,
		name: "Julie Kim",
		designation: "Digital Designer",
		src: julieKim,
	},
	{
		id: 12,
		name: "Olivia Zhou",
		designation: "Digital Designer",
		src: oliviaZhou,
	},
	// {
	//   id: 13,
	//   name: "Saichandu Juluri",
	//   designation: "Web Developer",
	//   src: saichanduJuluri,
	// },
	{
		id: 14,
		name: "Naomi Wiley",
		designation: "Forum Content Creator",
		src: naomiWiley,
	},
	{
		id: 15,
		name: "Dhruv Reddy Tekulapalli",
		designation: "Project Lead",
		src: dhruvReddy	},
	  {
		id: 16,
		name: "Maxim Ilin",
		designation: "Deputy Project Lead",
		src: maximIlin,
	  },

	// {
	//   id: 17,
	//   name: "Matthew Garcia",
	//   designation: "Reading Group Lead",
	//   src: matthewGarcia,
	// },
	// {
	// 	id: 18,
	// 	name: "Muskan Bhatt",
	// 	designation: "Sponsorship Assoc.",
	// 	src: muskanBhatt,
	// },
	{
		id: 19,
		name: "Jason Balayev",
		designation: "Web Developer",
		src: jasonBalayev,
	},
	{
		id: 20,
		name: "Avery Darlington",
		designation: "Content Creator",
		src: averyDarlington,
	},
];

// events page

// services page

export const eventsItems = [
	{
		id: 1,
		date: "09/01/2025",
		name: "AI in Healthcare",
		url: "/events",
		category: "AI X Healthcare",
		src: logo,
		description: "hackathon",
		button: "read",
	},
	{
		id: 1,
		date: "09/01/2025",
		name: "AI in Healthcare",
		url: "/events",
		category: "AI X fashion",
		src: logo,
		description: "hackathon",
		button: "read",
	},
];
