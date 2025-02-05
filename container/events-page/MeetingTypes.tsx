// Made by Jason Balayev

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface MeetingType {
    title: string;
    description: string;
    icon: string;
    color: string;
}

const meetingTypes: MeetingType[] = [
    {
        title: "AI Forum",
        description: "A dynamic forum combining discussions with hands-on applications of AI principles. Founded on open dialogue, idea-sharing, and connecting with others passionate about AI.",
        icon: "🤝",
        color: "#4F7942",  
    },
    {
        title: "AI Bootcamp Series",
        description: "Hands-on workshops introducing AI concepts, tools, and techniques. From coding basics to advanced machine learning, these sessions adapt each semester to empower learners.",
        icon: "🚀",
        color: "#1E90FF",  
    },
    {
        title: "Hackathons",
        description: "Collaborative events like Chatathon (focused on prompt engineering) and InnovAIte (a themed AI hackathon), sparking creativity through engaging challenges, inspiring speakers, exciting prizes, and more.",
        icon: "💡",
        color: "#9370DB", 
    },
    {
        title: "AI Perception Lab",
        description: "A research-driven initiative delving into cutting-edge AI projects, advancing knowledge, and solving real-world challenges.",
        icon: "🔬",
        color: "#CD853F",  
    },
    {
        title: "Lab Tours",
        description: "Exclusive visits to leading AI hubs like the IBM MIT Watson AI Lab, offering insights into groundbreaking research and industry applications.",
        icon: "🧪",
        color: "#FF6B6B",
    }
];

// New MeetingCard component with expandable description
function MeetingCard({ meeting, index }: { meeting: MeetingType; index: number }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
        >
            <div className="p-8">
                <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6"
                    style={{ backgroundColor: `${meeting.color}15` }}
                >
                    {meeting.icon}
                </div>
                <h3 
                    className="text-2xl font-semibold mb-4"
                    style={{ color: meeting.color }}
                >
                    {meeting.title}
                </h3>
                <AnimatePresence>
                    {expanded && (
                        <motion.p
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="text-gray-600 leading-relaxed overflow-hidden"
                        >
                            {meeting.description}
                        </motion.p>
                    )}
                </AnimatePresence>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 font-semibold py-1 px-3 rounded transition-colors duration-300 focus:outline-none"
                    style={{
                        color: expanded ? "#fff" : meeting.color,
                        backgroundColor: expanded ? meeting.color : "transparent",
                        border: `1px solid ${meeting.color}`
                    }}
                >
                    {expanded ? "Learn Less" : "Learn More"}
                </button>
            </div>
            <motion.div
                className="h-2"
                style={{ backgroundColor: meeting.color }}
                whileHover={{ height: "4px" }}
                transition={{ duration: 0.2 }}
            />
        </motion.div>
    );
}

export default function MeetingTypes() {
    return (
        <div className="w-full bg-[#F2F2F2] py-24">
            <div className="w-full max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[#212121] text-5xl md:text-6xl font-FoundersGrotesk font-bold uppercase tracking-tight">
                        Initiatives
                    </h2>
                    <div className="w-24 h-1 bg-[#394b3f] mx-auto mt-4 rounded-full"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {meetingTypes.map((meeting, index) => (
                        <MeetingCard key={index} meeting={meeting} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
} 