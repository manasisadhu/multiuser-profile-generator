import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | multiuser-profile-generator",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				multiuser card
			</section>
		</>
	);
};

export default page;
