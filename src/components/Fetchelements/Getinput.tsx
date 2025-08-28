import { Button } from "../shadcnui/button";
// import {
// 	Form,
// 	FormControl,
// 	FormDescription,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "../shadcnui/form";

const Getinput = () => {
	return (
		<>
			{/* <Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<input
										placeholder="shadcn"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form> */}

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
