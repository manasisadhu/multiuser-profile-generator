import { Card, CardContent } from "@/components/shadcnui/card";
import { UserDetailType } from "@/lib/types";
import Image from "next/image";
import { ShineBorder } from "../magicui/shine-border";
type CardPropsType = {
	info: UserDetailType;
};

const UserCard = ({ info }: CardPropsType) => {
	return (
		<>
			<Card className="relative w-full max-w-[350px] overflow-hidden">
				<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
				<div className="flex flex-col items-center justify-center gap-6">
					<Image
						src={info.picture.medium}
						alt="profile"
						height={100}
						width={100}
						priority
						className="h-[100px] w-[100px] rounded-full"
					/>

					<CardContent>
						<div className="">
							<div className="">Name : {info.name.first}</div>
							<div className="">Phone no : {info.phone}</div>
							<div className="">
								Loaction : {info.location.city}
							</div>
						</div>
					</CardContent>
				</div>
			</Card>
		</>
	);
};

export default UserCard;
