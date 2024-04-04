import { FC } from 'react'

import styles from './RouteGoods.module.scss'

interface RouteGoodsProps {
  title: string
  route: string
}

export const RouteGoods: FC<RouteGoodsProps> = ({ title, route }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.route}>{route}</p>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
