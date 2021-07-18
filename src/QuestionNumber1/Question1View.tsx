import React from "react";
import ListComponent from "./ListComponent";
import { Question1Wrapper } from "./Question1.style";

interface Props {}
const data = [
	{
		name: "Ruxana",
		email: "ruxanamaharjan@gmail.com",
		phoneNumber: "9810000000",
	},
	{
		name: "Ruxali",
		email: "ruxalimaharjan@gmail.com",
		phoneNumber: "9810000000",
	},
	{
		name: "Ruxal",
		email: "ruxalmaharjan@gmail.com",
		phoneNumber: "9810000000",
	},
];
const Question1View: React.FC<Props> = () => {
	return (
		<Question1Wrapper>
			<div>Displaying Name, Email, Phone Number using Reusable Component.</div>
			<section>
				<ListComponent data={data} />
			</section>
		</Question1Wrapper>
	);
};

export default Question1View;
