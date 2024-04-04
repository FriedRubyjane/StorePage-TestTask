import { FC } from 'react'

import styles from './Item.module.scss'

interface ItemProps {
  title: string
  city?: string
}

export const Item: FC<ItemProps> = ({ title, city = 'Доставка' }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <p className={styles.title}>{title}</p>
        <p className={styles.paragraph}>{city}</p>
      </div>
    </div>
  )
}
