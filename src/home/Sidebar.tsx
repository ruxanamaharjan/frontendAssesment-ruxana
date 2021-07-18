import React from "react";
import { SidebarItemWrapper, SidebarWrapper } from "./sidebar.style";

const Sidebar = () => {
	return (
		<SidebarWrapper>
			<section className="sidebar-item-list">
				<SidebarItem goto="/QuestionNumber1" title="Question #1" />
				<SidebarItem goto="/QuestionNumber2" title="Question #2" />
			</section>
		</SidebarWrapper>
	);
};

interface SidebarItemType {
	title: string;
	goto: string;
}

const SidebarItem = ({ title, goto }: SidebarItemType) => {
	return (
		<SidebarItemWrapper to={goto} exact activeClassName="active">
			<aside className="title">{title}</aside>
		</SidebarItemWrapper>
	);
};

export default Sidebar;
