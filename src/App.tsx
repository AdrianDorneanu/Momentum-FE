import backgroundVideo from './assets/background-gradient.mp4';
import styled from '@emotion/styled';
import HomePage from "./pages/homePage/HomePage.tsx";

const VideoBackground = styled.video`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	filter: hue-rotate(60deg) brightness(0.3);
`;

const MainLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const ContentArea = styled.div`
	display: flex;
	flex: 1;
	padding: 48px;
	overflow-y: auto;
`;

const App = () => {
	return (
		<MainLayout>
			<VideoBackground autoPlay loop muted playsInline>
				<source src={backgroundVideo}/>
			</VideoBackground>

			<ContentArea>
				<HomePage />
			</ContentArea>
		</MainLayout>
	)
}

export default App;
