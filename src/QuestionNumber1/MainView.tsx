import React from "react";
import ListComponent from "./ListComponent";

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
const MainView = () => {
	return (
		<div>
			<div>Displaying Name, Email, Phone Number using Reusable Component.</div>
			<div>
				<ListComponent data={data} />
			</div>
		</div>
	);
};

export default MainView;
