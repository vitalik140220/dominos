import { FC } from "react"
import { Link } from "react-router-dom"
import { Routes } from "../../constants/routes"
import styles from "./NavBarItem.module.scss"

interface NavBarItemProps {
	title: string
	to: Routes
}

const NavBarItem: FC<NavBarItemProps> = ({ title, to }) => {
	return (
		<div className={styles.navbaritem}>
			<Link to={to}>{title}</Link>
		</div>
	)
}

export default NavBarItem
