import { FC } from "react"
import { navBarItems } from "../../constants/routes"
import NavBarItem from "../navBarItem/NavBarItem"
import styles from "./NavBar.module.scss"
import Button from "../../../../UI/button/Button"

export const NavBar: FC = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarItemsContainers}>
				{navBarItems.map((item, index) => (
					<NavBarItem title={item.title} to={item.to} key={index} />
				))}
			</div>
			<Button
				title='Увійти'
				handleButton={() => {}}
				style={styles.entrieButton}
			/>
		</div>
	)
}
