import CardSkeleton from "@/components/Fetchelements/Cardskeleton";
import DynamicCard from "@/components/Fetchelements/DynamicCard";
import fetchData from "@/lib/fetchData";

import { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ num: string }> }) => {
	const { num } = await params;
	const userData = await fetchData(parseInt(num));

	return (
		<>
			<Suspense
				fallback={
					<section className="grid grid-cols-1 place-items-center gap-10 py-10 lg:h-[80dvh] lg:grid-cols-3">
						{userData.map((result) => (
							<CardSkeleton key={result.phone} />
						))}
					</section>
				}>
				<DynamicCard id={{ num }} />
			</Suspense>
		</>
	);
};

export default page;
