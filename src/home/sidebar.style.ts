import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarItemWrapper = styled(NavLink)`
	padding: 0 16px;
	height: 44px;
	display: flex;
	background: var(--white);
	align-items: center;
	margin-bottom: var(--gap);
	border-radius: var(--br);
	cursor: pointer;

	.title {
		color: #575556;
		font-size: var(--font-base);
		font-weight: 500;
	}

	&.active,
	&:hover {
		background: var(--bg);
		.title {
			color: var(--link);
		}
	}
`;

export const SidebarWrapper = styled.div`
	height: calc(100vh - var(--gap-xl) * 2);
	margin-top: var(--gap-xl);
	margin-left: var(--gap-xl);
	width: 300px;
	background: var(--white);
	border-radius: var(--br);
	overflow-y: auto;

	.sidebar-item-list {
		padding: 0 24px;
		padding-top: 24px;
	}
`;
