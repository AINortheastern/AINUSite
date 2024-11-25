import { footerItems } from "@/constants";
import Link from "next/link";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaTree,
  FaYoutube,
} from "react-icons/fa";

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
        return IconComponent && (
          <Link
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center 
              text-black font-bold text-sm sm:text-base 
              hover:text-gray-700 
              transition-colors duration-300 
              p-2 rounded-full 
              hover:bg-gray-100"
          >
            {IconComponent && <IconComponent size={24} className="mr-2" />}
            <span className="hidden sm:inline">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
