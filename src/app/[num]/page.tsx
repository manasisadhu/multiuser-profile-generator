import UserCard from "@/components/Fetchelements/UserCard";
import fetchdata from "@/lib/fetchdata";

const page = async ({ params }: { params: Promise<{ num: string }> }) => {
	const { num } = await params;
	const UserData = await fetchdata(parseInt(num));

	return (
		<>
			<section className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
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

export default page;
