// Made by Jason Balayev

import { motion } from "framer-motion";

interface MeetingType {
    title: string;
    description: string;
    icon: string;
    color: string;
}

const meetingTypes: MeetingType[] = [
    {
        title: "General Meetings",
        description: "Text.",
        icon: "🤝",
        color: "#4F7942",  
    },
    {
        title: "AI Bootcamp Series",
        description: "Text.",
        icon: "🚀",
        color: "#1E90FF",  
    },
    {
        title: "Hackathons",
        description: "Text.",
        icon: "💡",
        color: "#9370DB", 
    },
    {
        title: "AI Perception Lab",
        description: "Text.",
        icon: "🔬",
        color: "#CD853F",  
    }
];

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
                                <p className="text-gray-600 leading-relaxed">
                                    {meeting.description}
                                </p>
                            </div>
                            <motion.div
                                className="h-2"
                                style={{ backgroundColor: meeting.color }}
                                whileHover={{ height: "4px" }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
} 