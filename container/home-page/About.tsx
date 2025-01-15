"use client";

import SocialIcons from "@/components/SocialIcons";

export default function About() {
	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<p className="sub-heading font-medium font-NeueMontreal text-secondry">
					AI Northeastern is committed to transforming the landscape of artificial intelligence at
					Northeastern University, Boston, and beyond by serving as a valuable resource, enhancing
					knowledge and understanding of AI. Our core principles are inclusiveness,
					interdisciplinarity, responsibility, innovation, and collaboration.
				</p>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h1 className="sub-heading font-medium text-secondry font-NeueMontreal mb-2 text-white">
							What you can expect?
						</h1>
						<div className="w sm:w-[60%] xm:w-[60%]">
							<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
								AI NU hosts a weekly reading group to discuss papers in AI, bringing together
								students and experts to deepen their understanding. Additionally, we organize
								hackathons to foster innovation and skill-building, and feature guest speakers who
								are leaders in the field of AI.
							</p>
							<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
								With a focus on collaboration and responsibility, AI NU empowers the next generation
								of AI practitioners, driving innovation and growth in the AI community.
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex flex-col items-center justify-center h-full space-y-4 text-center">
							<blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-NeueMontreal text-white max-w-2xl ">
								"Artificial intelligence, deep learning, machine learning — whatever you're doing if
								you don't understand it — learn it. Because otherwise, you're going to be a dinosaur
								within three years."
							</blockquote>
							<p className="text-base font-light font-NeueMontreal text-white tracking-wide">
								— Mark Cuban
							</p>
						</div>
					</div>
				</div>
			</div>
			<SocialIcons />

			{/* <div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px]">
          <Heading title="Our approach:" />
          <div
            className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <RoundButton
              href="/ochi-team"
              title="read more"
              bgcolor="#000"
              className="bg-white text-black"
              style={{ color: "#fff" }}
            />
          </div>
        </div>
        <div
          className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${
            hovered && "scale-[0.96]"
          }`}
        >
          <Image
            src={aboutImg}
            alt="about-img"
            className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
              hovered && "scale-[1.09]"
            }`}
          />
        </div>
      </div> */}
		</section>
	);
}
