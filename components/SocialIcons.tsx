import { footerItems } from "@/constants";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaLinkedin, FaEnvelope, FaTree, FaYoutube } from "react-icons/fa";

export default function SocialIcons() {
	const socialIcons: any = {
		Discord: FaDiscord,
		Email: FaEnvelope,
		Instagram: FaInstagram,
		LinkedIn: FaLinkedin,
		YouTube: FaYoutube,
		Linktree: FaTree,
	};
	return (
		<div className="w-full flex justify-center items-center space-x-2 sm:space-x-4 px-4 sm:px-8 py-4">
			{footerItems.map((item) => {
				const IconComponent = socialIcons[item.title];
				return (
					IconComponent && (
						<Link
							key={item.id}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center 
              text-black hover:text-[#f1c347] font-bold text-sm sm:text-base 
              transition-all duration-300 ease-in-out
              p-2 rounded-full 
              transform hover:scale-110"
						>
							{IconComponent && <IconComponent size={32} className="mr-2" />}
							<span className="hidden sm:inline">{item.title}</span>
						</Link>
					)
				);
			})}
		</div>
	);
}
