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
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Join Us", href: "#join" },
  { label: "Team", href: "#team" },
];

interface SectionProps {
  id: string;
  title: string;
  content: string;
  children?: React.ReactNode;
}

const Hero = () => {
  return (
    <section className="w-full h-screen relative bg-background overflow-hidden">
      <NoiseBackground />
      <NoiseAnimation />
      <div className="h-full flex items-center relative z-10">
        <div className="w-1/2 pl-8 md:pl-16 lg:pl-24">
          <div className="max-w-full relative">
            <div className="bg-white bg-opacity-50 rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="flex items-center gap-6">
                <h1 className="text-8xl md:text-[12rem] font-bold text-secondry flex items-center gap-6">
                  AI Perception Lab
                  <motion.img
                    src="/canvaDesigns/canva3.png"
                    alt="Eye logo"
                    className="w-32 md:w-48 lg:w-64 inline-block relative top-3 md:top-10"
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
              
              <p className="text-3xl md:text-4xl xl:text-5xl mb-10 text-gray-700 mt-8 font-medium pr-6 md:pr-12 leading-tight">
                Engineering adaptive AI perception through human-machine-environment synthesis
                —enabling ethical autonomy in intelligent infrastructures and human-machine
                collaboration.
              </p>
            </div>
          </div>

          <div className="absolute bottom-20 left-8 md:left-16 lg:left-24">
            <div className="bg-white bg-opacity-50 rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <nav className="flex flex-wrap gap-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-2xl md:text-3xl lg:text-4xl text-secondry hover:text-primary transition-colors font-medium"
                    data-scroll-to
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-start mt-8">
                <span className="text-2xl md:text-3xl lg:text-4xl text-secondry mr-8 font-medium">Explore Our Lab</span>
                <div className="w-10 h-14 border-2 border-secondry rounded-full flex items-start p-1">
                  <div className="w-2.5 h-2.5 bg-secondry rounded-full animate-bounce mx-auto" />
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
