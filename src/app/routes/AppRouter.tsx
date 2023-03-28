import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { Main } from "../../pages/main"
import { News } from "../../pages/news"

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route Component={Main} path='/' />
			<Route Component={News} path='/news' />
		</Routes>
	)
}

export default AppRouter
