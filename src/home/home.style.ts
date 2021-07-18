import styled from "styled-components";

export const HomeViewWrapper = styled.div`
	display: flex;
	.main-container {
		display: grid;
		grid-template-columns: 320px 1fr;
		grid-gap: 20px;
	}
	.content-area {
		margin-top: var(--gap-xl);
	}
`;
