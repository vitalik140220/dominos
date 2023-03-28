import { Header } from "../modules/header"
import { NavBar } from "../modules/navBar"
import AppRouter from "./routes/AppRouter"
import AppRouterWrapper from "./routes/AppRouterWrapper"

function App() {
	return (
		<AppRouterWrapper>
			<NavBar />
			<Header />
			<AppRouter />
		</AppRouterWrapper>
	)
}

export default App
