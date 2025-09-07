"use client";
import { SchemaObj, SchemaType } from "@/lib/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../shadcnui/form";
import { Input } from "../shadcnui/input";
const GetInput = () => {
	const { push, replace } = useRouter();

	useEffect(() => {
		if (window.location.pathname === "/[num]") {
			replace("/");
		} else {
			push("/");
		}
	}, [push, replace]);

	const getForm = useForm<SchemaType>({
		resolver: zodResolver(SchemaObj),
		defaultValues: {
			num: 0,
		},
	});

	const OnSubmit = ({ num }: SchemaType) => {
		// console.log(fdata);
		push(`/${num}`);
	};

	return (
		<>
			<Form {...getForm}>
				<form
					onSubmit={getForm.handleSubmit(OnSubmit)}
					className="gap-2 space-y-2 md:flex md:space-y-0">
					<FormField
						control={getForm.control}
						name="num"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Enter the number"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600"
						disabled={getForm.formState.isSubmitting}>
						{getForm.formState.isSubmitting ? (
							<>
								<Loader className="animate-spin" />
								Submitting
							</>
						) : (
							<>
								<Send />
								Submit
							</>
						)}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default GetInput;
