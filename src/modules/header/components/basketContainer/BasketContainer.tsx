import { FC } from "react"
import BasketCircleButton from "../basketCircleButton/BasketCircleButton"
import styles from "./BasketContainer.module.scss"
import Button from "../../../../UI/button/Button"

const BasketContainer: FC = () => {
	return (
		<div className={styles.basketContainer}>
			<BasketCircleButton />
			<Button
				title='Замовити'
				handleButton={() => {}}
				style={styles.basketButton}
			/>
		</div>
	)
}

export default BasketContainer
