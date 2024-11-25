import Image from "next/image";
import { motion } from "framer-motion";
import { logo } from "@/public";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-[60vh] flex items-center">
      <div className="w-full flex items-center justify-between px-12">
        {/* Logo Container - 70% */}
        <div className="w-[70%] flex justify-center items-center">
          <Image
            width={800}
            height={800}
            src={"/InnovaiteLogo.png"}
            alt="Innovaite Logo"
            className="w-[80%] object-contain transition-all duration-300"
            priority
          />
        </div>

        {/* Button Container - 30% */}
        <div className="w-[30%] flex justify-center items-center">
          <Link 
            href="#" 
            className="bg-[#394b3f] text-white px-8 py-4 rounded-full 
              text-xl font-bold font-NeueMontreal
              hover:bg-[#a5babf] transition-all duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
}