import { FC } from "react"
import HeaderItem from "../headerItem/HeaderItem"
import { headerItems } from "../../constants/headerItems"
import Logo from "../../assets/logo.png"
import styles from "./HeaderItemContainer.module.scss"
const HeaderItemsContainer: FC = () => {
	return (
		<div className={styles.headerItemsContainer}>
			<img src={Logo} alt='s' />
			{headerItems.map((item, index) => (
				<HeaderItem title={item.title} to={item.to} key={index} />
			))}
		</div>
	)
}

export default HeaderItemsContainer
