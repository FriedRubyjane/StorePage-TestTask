import { FC } from 'react'

import { Switch } from '../../../Switch/Switch'
import { Delivery } from '../Delivery/Delivery'
import styles from './Price.module.scss'

interface PriceProps {
  price: string
  discount: string
  priceWithoutDiscount: string
  amountInPackage: string
  delivery: string
  amount: string
  city: string
}

export const Price: FC<PriceProps> = ({
  price,
  discount,
  priceWithoutDiscount,
  amountInPackage,
  delivery,
  amount,
  city,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <p className={styles.priceWithoutDiscount}>
          {priceWithoutDiscount}
        </p>
        <div className={styles.itemsPrice}>
          <h3 className={styles.price}>{price}</h3>
          <div className={styles.itemsDiscount}>
            <p className={styles.discount}>{discount}</p>
          </div>
        </div>
        <div className={styles.amount}>
          <div className={styles.amountBG}>
            <p className={styles.amountInPackage}>{amountInPackage}</p>
          </div>
          <Switch title='Заказ упаковкой' />
        </div>
      </div>
      <div className={styles.divider} />
      <Delivery delivery={delivery} amount={amount} city={city} />
    </div>
  )
}
