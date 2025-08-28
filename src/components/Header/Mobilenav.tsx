import { Menu } from "lucide-react";
import Getinput from "../Fetchelements/Getinput";
import { AuroraText } from "../magicui/aurora-text";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../shadcnui/sheet";

const Mobilenav = () => {
	return (
		<>
			<Sheet>
				<SheetTrigger className="rounded-md bg-black/30 p-2 text-white">
					<Menu />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>
							<AuroraText className="text-xl">
								MultiUserCard
							</AuroraText>
						</SheetTitle>
					</SheetHeader>

					<div className="space-y-4 px-4">
						<Getinput />
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
};

export default Mobilenav;
