import Link from "next/link";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();
	const router = useRouter();
	const isHomePage = router.asPath === "/";

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
				className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[12px] bg-black/10 flex items-center justify-between sm:hidden xm:hidden md:hidden"
				animate={hidden ? "hidden" : "vissible"}
			>
				<div className="flex justify-center items-center h-full">
					<Image 
						src="/logo.png"
						alt="ai neu logo" 
						width={60} 
						height={60}
						priority
					/>
					<motion.span
						initial={{ width: 0 }}
						animate={{ width: "auto" }}
						transition={{
							ease: [0.86, 0, 0.07, 0.995],
							duration: 1,
							delay: 1.5,
						}}
					>
						<Link
							className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out"
							href={"/"}
						>
							<Image
								src="/ai-neu-text.png"
								alt="ai neu logo"
								width={200}
								height={200} 
								priority
							/>
						</Link>
					</motion.span>
				</div>

				<div className="flex gap-x-[40px] w-[60%] pl-32">
					{navbarItems.map((item) => (
						<Link
							key={item.id}
							className={`w-fit text-3xl font-extrabold font-NeueMontreal ${
								isHomePage ? "text-black" : "text-white"
							} capitalize flex flex-col hover tracking-wide`}
							href={item.href}
						>
							<TextHover titile1={item.title} titile2={item.title} isHomePage={isHomePage} />
						</Link>
					))}
				</div>
			</motion.nav>
			<MobileNav />
		</>
	);
}