import { FC, ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"

interface AppRouterWrapperProps {
	children: ReactNode
}

const AppRouterWrapper: FC<AppRouterWrapperProps> = ({ children }) => {
	return <BrowserRouter>{children}</BrowserRouter>
}

export default AppRouterWrapper
