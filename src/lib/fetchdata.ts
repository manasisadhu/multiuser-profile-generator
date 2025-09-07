import ky from "ky";
import { UserDetailResultsType } from "./types";

const fetchData = async (num?: number) => {
	const { results } = await ky
		.get("https://randomuser.me/api/", {
			searchParams: {
				noinfo: " ",
				results: num || 3,
			},
		})
		.json<UserDetailResultsType>();
	return results;
};

export default fetchData;
