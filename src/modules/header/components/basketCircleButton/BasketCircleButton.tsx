import { FC } from "react"
import styles from "./BasketCircleButton.module.scss"
import Basket from "../../assets/basket.png"

const BasketCircleButton: FC = () => {
	return (
		<div className={styles.babasketCircleButton}>
			<div className={styles.numbreOfOrder}>00</div>
			<img src={Basket} alt='Basket' />
		</div>
	)
}

export default BasketCircleButton
