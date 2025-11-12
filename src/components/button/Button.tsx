import styled from '@emotion/styled';
import type {FC, PropsWithChildren} from "react";

const StyledButton = styled.button`
	color: black;
	cursor: pointer;
	font-size: 1.25rem;
	font-weight: 500;
	padding: 16px 128px;
	border-radius: 999rem;
`;

const Button: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyledButton>{children}</StyledButton>
	)
};

export default Button;
