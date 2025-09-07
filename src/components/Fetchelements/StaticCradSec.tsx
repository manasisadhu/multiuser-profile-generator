import fetchData from "@/lib/fetchData";
import UserCard from "./UserCard";

const StaticCradSec = async () => {
	const userData = await fetchData(3);

	return (
		<>
			<section className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:h-[80dvh] lg:grid-cols-3">
				{userData.map((result) => (
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
