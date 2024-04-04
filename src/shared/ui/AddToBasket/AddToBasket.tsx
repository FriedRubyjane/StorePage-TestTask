import { FC, useEffect, useState } from 'react'

import styles from './AddToBasket.module.scss'

export type SignalCallback = (data: boolean) => void

export const AddToBasket: FC<{ onSignal: SignalCallback }> = ({
  onSignal,
}) => {
  const [count, setCount] = useState<number>(1)
  const [end, setEnd] = useState<string>('штука')

  const renderItemCount = () => {
    const lastDigit = count % 10
    const lastTwoDigits = count % 100

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      setEnd('штук')
    } else if (lastDigit === 1) {
      setEnd('штука')
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      setEnd('штуки')
    } else {
      setEnd('штук')
    }
  }

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)

    if (count === 1) {
      onSignal(false)
    }
  }

  useEffect(() => {
    renderItemCount()
  }, [count])

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.operator}
        src='/icons/minus.svg'
        alt='Minus'
        onClick={decrement}
      />
      <div className={styles.count}>
        {count} {end}
      </div>
      <img
        className={styles.operator}
        src='/icons/plus.svg'
        alt='Minus'
        onClick={increment}
      />
    </div>
  )
}
