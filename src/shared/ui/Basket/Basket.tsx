import { FC } from 'react'

import styles from './Basket.module.scss'

interface BasketProps {
  sum: string
}

export const Basket: FC<BasketProps> = ({ sum }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <img
          src='/icons/basketBlue.svg'
          alt='Basket'
          className={styles.icon}
        />
        <p className={styles.paragraph}>{sum}</p>
      </div>
    </div>
  )
}
