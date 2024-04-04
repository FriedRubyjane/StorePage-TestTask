import { FC } from 'react'

import styles from './Item.module.scss'

interface ItemProps {
  title: string
  name: string
  style?: string
}

export const Item: FC<ItemProps> = ({ title, name, style }) => {
  return (
    <div className={`${styles.wrapper} ${style}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{name}</p>
    </div>
  )
}
