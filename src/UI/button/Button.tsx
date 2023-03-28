import { FC } from "react"
import styles from "./Button.module.scss"

interface ButtonProps {
	title: string
	handleButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	style: string
}

const Button: FC<ButtonProps> = ({ title, handleButton, style }) => {
	return (
		<div className={styles.button + " " + style} onClick={handleButton}>
			{title}
		</div>
	)
}

export default Button
