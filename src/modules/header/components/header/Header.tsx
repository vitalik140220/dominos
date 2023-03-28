import { FC } from "react"
import HeaderItemsContainer from "../headerItemsContainer/HeaderItemsContainer"
import styles from "./Header.module.scss"
import BasketContainer from "../basketContainer/BasketContainer"
import MenuIcon from "../../assets/menu.png"

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<HeaderItemsContainer />
			<div className={styles.rightWrapper}>
				<BasketContainer />
				<img src={MenuIcon} alt='Menu' className={styles.logo} />
			</div>
		</div>
	)
}
