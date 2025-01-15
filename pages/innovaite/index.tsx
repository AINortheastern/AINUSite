import { Hero as Innovaitehero, InnovAIteEvent } from "@/container";
import { Curve } from "@/components";

export default function InnovAItePage() {
	return (
		<Curve backgroundColor={"#1C1D20"}>
			<Innovaitehero />
			<InnovAIteEvent />
		</Curve>
	);
}
