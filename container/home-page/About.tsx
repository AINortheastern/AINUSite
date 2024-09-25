"use client";


export default function About() {

  return (
    <section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px] cursor-[url(/swarmscape),_pointer]">
      <div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
        <h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
          AI Northeastern is committed to&nbsp;
          <span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
            transforming
          </span>
          &nbsp; the landscape of artificial intelligence at Northeastern
          University, Boston, and beyond by serving as a
          <span className="sub-heading font-medium font-NeueMontreal">
            &nbsp;valuable resource,
          </span>
          &nbsp;
          <span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
            enhancing
          </span>
          &nbsp;knowledge and understanding of AI.
          <br className="sm:hidden xm:hidden" />
          Our&nbsp;
          <span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
            core principles
          </span>
          &nbsp;are&nbsp;
          <span className="sub-heading font-medium font-NeueMontreal">
            inclusiveness, interdisciplinarity, responsibility, innovation, and
            collaboration.
          </span>
        </h2>
      </div>
	  <div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
  <div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
    <div className="w-[50%] sm:w-full xm:w-full">
      <h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal">
        What you can expect?
      </h3>
	  <blockquote className="text-3xl font-bold font-NeueMontreal text-secondry pt-[40%] text-white">
            "Artificial intelligence, deep learning, machine learning — whatever you’re doing 
            if you don’t understand it — learn it. Because otherwise, you’re going to be a dinosaur within three years."
          </blockquote>
          <p className="text-base font-light font-NeueMontreal text-secondry tracking-wide pt-[10px] text-white">
            — Mark Cuban
          </p>
    </div>
    <div className="w-[50%] sm:w-full xm:w-full">
      <div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
        <div className="w-[40%] sm:w-[60%] xm:w-[60%]">
          <p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
            AI NU hosts a weekly reading group to discuss papers in AI,
            bringing together students and experts to deepen their understanding. 
            Additionally, we organize hackathons to foster innovation and skill-building, 
            and feature guest speakers who are leaders in the field of AI.
          </p>
          <p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
            With a focus on collaboration and responsibility, AI NU empowers the next generation 
            of AI practitioners, driving innovation and growth in the AI community.
          </p>
          
        </div>
      </div>
    </div>
  </div>
</div>


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
