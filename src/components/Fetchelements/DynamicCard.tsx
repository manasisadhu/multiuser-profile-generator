import fetchdata from "@/lib/fetchdata";
import UserCard from "./UserCard";

interface cardprops {
	id: { num: string };
}

const DynamicCard = async ({ id }: cardprops) => {
	const UserData = await fetchdata(parseInt(id.num));
	return (
		<>
			<section className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:h-[80dvh] lg:grid-cols-3">
				{UserData.map((result) => {
					return (
						<UserCard
							key={result.phone}
							info={result}
						/>
					);
				})}
			</section>
		</>
	);
};

export default DynamicCard;
