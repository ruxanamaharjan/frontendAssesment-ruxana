import React from "react";
import { ListComponentWrapper, ListDiv } from "./ListComponentStyle";

const ListComponent = (props: any) => {
	const list = props.data;
	const listItems = list.map((each: any) => (
		<ListDiv>
			<div>{each.name}</div>
			<div>{each.email}</div>
			<div>{each.phoneNumber}</div>
		</ListDiv>
	));
	return (
		<ListComponentWrapper>
			<ListDiv>
				<div>Name</div>
				<div>Email</div>
				<div>Phone Number</div>
			</ListDiv>
			<div>{listItems}</div>
		</ListComponentWrapper>
	);
};

export default ListComponent;
