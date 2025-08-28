import { Button } from "../shadcnui/button";

const Getinput = () => {
	return (
		<>
			<input
				type="text"
				placeholder="enter your number"
				className="border-2 p-2"
			/>
			<Button
				type="submit"
				className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600">
				submit
			</Button>
		</>
	);
};

export default Getinput;
