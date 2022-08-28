import { Category } from '../../data/category'

import CategoryList from './Categorylist'
import styles from './LightBox.module.scss'

export interface LightBoxProps {
	categories: Category[]
	show: boolean
	setShow: any
}
function LightBox({ categories, show, setShow }: LightBoxProps) {
	if (!show)
		return (
			<div>
				{categories.map((service: Category) => (
					<CategoryList categories={service} key={service.category} />
				))}
			</div>
		)

	return (
		<div
			onClick={() => {
				setShow(!show)
			}}>
			{categories.map((service: Category) => (
				<CategoryList categories={service} key={service.category} />
			))}
			<div className={styles.hidden}></div>
		</div>
	)
}

export default LightBox
