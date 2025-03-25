import React from "react";
import Link from "next/link";
import NoiseBackground from '@/components/NoiseBackground';
import NoiseAnimation from '@/components/NoiseAnimation';
import { motion } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { label: "About Us", href: "#problem" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Join Us", href: "#join-us" },
  { label: "Team", href: "#team" },
];

interface SectionProps {
  id: string;
  title: string;
  content: string;
  children?: React.ReactNode;
}

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="w-full h-screen relative bg-background overflow-hidden">
      <NoiseBackground />
      <NoiseAnimation />
      <div className="h-full flex items-center relative z-10">
        <div className="w-full lg:w-3/4 xl:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-full relative space-y-32 md:space-y-40">
            <div className="bg-white bg-opacity-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 relative overflow-hidden">
              <div className="flex items-center gap-4 sm:gap-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[12rem] font-bold text-secondry flex items-center gap-4 sm:gap-6">
                  AI Perception Lab
                  <motion.img
                    src="/canvaDesigns/canva3.png"
                    alt="Eye logo"
                    className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-48 2xl:w-64 inline-block relative top-1 sm:top-2 md:top-3 lg:top-5 xl:top-8 2xl:top-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                  />
                </h1>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-6 sm:mb-8 md:mb-10 text-gray-700 mt-4 sm:mt-6 md:mt-8 font-medium pr-4 sm:pr-6 md:pr-8 lg:pr-12 leading-tight">
                Engineering adaptive AI perception through human-machine-environment synthesis
                —enabling ethical autonomy in intelligent infrastructures and human-machine
                collaboration.
              </p>
            </div>

            <div className="bg-white bg-opacity-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 relative overflow-hidden max-w-[800px]">
              <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-secondry hover:text-primary transition-colors font-medium cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-start mt-4 sm:mt-6 md:mt-8">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-secondry mr-4 sm:mr-6 md:mr-8 font-medium">
                  Explore Our Lab
                </span>
                <div className="w-8 sm:w-9 md:w-10 h-12 sm:h-13 md:h-14 border-2 border-secondry rounded-full flex items-start p-1">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-secondry rounded-full animate-bounce mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
