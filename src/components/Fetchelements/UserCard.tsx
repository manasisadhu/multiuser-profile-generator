import { Card, CardContent } from "@/components/shadcnui/card";
import { UserDetailType } from "@/lib/types";
import { UserRoundPen } from "lucide-react";
import Image from "next/image";
import { ShineBorder } from "../magicui/shine-border";
import { Separator } from "../shadcnui/separator";
type CardPropsType = {
	info: UserDetailType;
};

const UserCard = ({ info }: CardPropsType) => {
	return (
		<>
			<Card className="relative w-full overflow-hidden">
				<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
				<div className="flex flex-col items-center justify-center gap-6">
					<Image
						src={info.picture.large}
						alt="profile"
						height={400}
						width={400}
						priority
						className="h-[100px] w-[100px] rounded-full"
					/>

					<CardContent>
						<div className="">
							<div className="flex items-center justify-center gap-2 text-3xl font-semibold">
								<UserRoundPen size={24} />
								{info.name.first}
							</div>
							<Separator className="my-2"></Separator>
							<div className="">Phone no : {info.phone}</div>
							<div className="">
								Loaction : {info.location.city}
							</div>
							<div className="">Email : {info.email}</div>
						</div>
					</CardContent>
				</div>
			</Card>
		</>
	);
};

export default UserCard;
