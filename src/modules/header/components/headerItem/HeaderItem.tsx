import { FC } from "react"
import { Link } from "react-router-dom"
import styles from "./HeaderItem.module.scss"

interface HeaderItemProps {
	title: string
	to: string
}

const HeaderItem: FC<HeaderItemProps> = ({ title, to }) => {
	return (
		<div className={styles.headerItem}>
			<Link to={to}>{title}</Link>
		</div>
	)
}

export default HeaderItem
