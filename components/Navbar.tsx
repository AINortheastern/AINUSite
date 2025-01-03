import Link from "next/link";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<>
			<motion.nav
				variants={navVariants}
				className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
				animate={hidden ? "hidden" : "vissible"}>
<div className="flex justify-center items-center h-full">

  <img 
    alt="ai neu logo"  
    width="60" 
    height="60" 
    data-nimg="1" 
    src='/logo.png' 
  />
  <motion.span
								initial={{ width: 0 }}
								animate={{ width: "auto" }}
								transition={{
									ease: [0.86, 0, 0.07, 0.995],
									duration: 1,
									delay: 1.5,
								}}>
	<Link
						className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out"
						href={'/'}>
					

    <img 
    alt="ai neu logo" 
   
    width="200" 
    height="200" 
    
    data-nimg="1" 
    src="/ai-neu-text.png" 
  />
</Link>
  </motion.span>
  </div>


				<div className="flex gap-x-[20px] w-[50%]">
					{navbarItems.map((item) => (
						<Link
							key={item.id}
							className={`w-fit paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover ${
								item.id === 5 && "ml-auto"
							}`}
							href={item.href}>
							<TextHover
								titile1={item.title}
								titile2={item.title}
							/>
						</Link>
					))}
				</div>
			</motion.nav>
			<MobileNav />
		</>
	);
}
