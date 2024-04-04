import { FC } from 'react'

import { descriptionProduct } from '../../../../../app/data/similarProducts'
import styles from './Description.module.scss'

export const Description: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Описание товара</h2>
      <p className={styles.description}>{descriptionProduct}</p>
    </div>
  )
}
