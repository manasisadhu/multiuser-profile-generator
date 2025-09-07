import CardSkeleton from "@/components/Fetchelements/Cardskeleton";
import StaticCradSec from "@/components/Fetchelements/StaticCradSec";
import fetchData from "@/lib/fetchData";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = async () => {
	const userData = await fetchData(3);
	return (
		<>
			<Suspense
				fallback={
					<section className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:h-[80dvh] lg:grid-cols-3">
						{userData.map((result) => (
							<CardSkeleton key={result.phone} />
						))}
					</section>
				}>
				<StaticCradSec />
			</Suspense>
		</>
	);
};

export default page;
