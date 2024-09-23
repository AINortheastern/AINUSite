import Image from "next/image";
import {

	swarmscape,
} from "@/public";


export default function Chelenge() {
	return (
		<section className="w-full pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px]">
			
			<div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
				<div className="w-[49%] sm:w-full xm:w-full">
					<Image
						src={swarmscape}
						className="w-full  object-cover "
						alt="chelengeBgImg"
					/>
				</div>
				{/* <div className="w-[49%] sm:w-full xm:w-full">
					<Image
						src={swarmscape}
						className="w-full  object-cover rounded-[20px]"
						alt="chelengeBgImg"
					/>
				</div> */}
			</div>
			
	
		</section>
	);
}
