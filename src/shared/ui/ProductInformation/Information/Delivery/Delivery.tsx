import { FC, useState } from 'react'

import {
  AddToBasket,
  SignalCallback,
} from '../../../AddToBasket/AddToBasket'
import { Button } from '../../../Button/Button'
import { Icon } from '../../PhotoProduct/Icon/Icon'
import styles from './Delivery.module.scss'
import { Item } from './Item/Item'

interface DeliveryProps {
  delivery: string
  amount: string
  city: string
}

export const Delivery: FC<DeliveryProps> = ({
  delivery,
  amount,
  city,
}) => {
  const [visibleCounter, setVisibleCounter] = useState<boolean>(false)

  const handleSignal: SignalCallback = data => {
    setVisibleCounter(data)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Item title={delivery} />
        <Item title={amount} city={city} />
        <Item title={amount} city={city} />
      </div>
      <div className={styles.purchase}>
        <div>
          {!visibleCounter ? (
            <div
              onClick={() => {
                setVisibleCounter(true)
              }}
            >
              <Button
                style={styles.buttonPurchase}
                icon='/icons/basketWhite.svg'
                text='В корзину'
              />
            </div>
          ) : (
            <AddToBasket onSignal={handleSignal} />
          )}
        </div>

        <Icon icon='/icons/heart.svg' style={styles.heart} />
      </div>
    </>
  )
}
