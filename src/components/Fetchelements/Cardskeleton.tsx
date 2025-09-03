"use client";

import { Card } from "@/components/shadcnui/card";
import { Skeleton } from "@/components/shadcnui/skeleton";
const CardSkeleton = () => {
	return (
		<Card className="flex w-[350px] items-start justify-start gap-4 p-4">
			{/* Avatar Skeleton */}
			<Skeleton className="mx-auto h-[80px] w-[80px] rounded-full md:h-[100px] md:w-[100px]" />

			<Skeleton className="h-4 w-3/4" />
			<Skeleton className="h-4 w-2/3" />
			<Skeleton className="h-4 w-1/2" />
			<Skeleton className="h-4 w-1/3" />
		</Card>
	);
};

export default CardSkeleton;
