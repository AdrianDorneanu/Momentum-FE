import Button from "../../components/button/Button.tsx";
import styled from "@emotion/styled";

const HomePageWrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const HomePage = () => {
	return (
		<HomePageWrapper>
			<Button>Start breathing</Button>

		</HomePageWrapper>
	)
};

export default HomePage;

