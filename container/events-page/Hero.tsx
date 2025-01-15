import { Marquee } from "@/components";

export default function Hero() {
	return (
		<section className="w-full">
			<div className="w-full bg-marquee padding-y rounded-t-[20px]">
				<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
					<Marquee
						title="Events"
						className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
					/>
				</div>
			</div>
			<div className="w-full bg-[#F2F2F2] padding-y">
				<div className="w-full margin padding-x">
					<div className="max-w-[90%] mx-auto">
						<h1 className="heading text-[120px] md:text-[180px] tracking-[-3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase mb-4">
							Events
						</h1>
						<p className="text-xl md:text-2xl text-[#212121] opacity-80 max-w-[600px]">
							Join us for exciting workshops, hackathons, and tech talks. Stay updated with all our upcoming events.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
