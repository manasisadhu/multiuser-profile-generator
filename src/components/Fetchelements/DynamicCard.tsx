import fetchData from "@/lib/fetchData";
import UserCard from "./UserCard";

interface cardprops {
	id: { num: string };
}

const DynamicCard = async ({ id }: cardprops) => {
	const userData = await fetchData(parseInt(id.num));
	return (
		<>
			<section className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-3">
				{userData.map((result) => {
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
