import fetchdata from "@/lib/fetchdata";
import UserCard from "./UserCard";

const StaticCradSec = async () => {
	const UserData = await fetchdata(3);
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<>
			<section className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:h-[80dvh] lg:grid-cols-3">
				{UserData.map((result) => (
					<UserCard
						key={result.phone}
						info={result}
					/>
				))}
			</section>
		</>
	);
};

export default StaticCradSec;
