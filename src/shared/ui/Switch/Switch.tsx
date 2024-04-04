import { FC, useState } from 'react'

import styles from './Switch.module.scss'

interface SwitchProps {
  title?: string
}

export const Switch: FC<SwitchProps> = ({ title }) => {
  const [isToggled, setIsToggled] = useState(true)

  return (
    <>
      <div
        className={`${styles.wrapper} ${isToggled ? styles.active : null}`}
        onClick={() => {
          setIsToggled(!isToggled)
        }}
      >
        <img
          src='/icons/toggle.svg'
          alt='Toggle'
          className={`${styles.toggle} ${
            isToggled ? styles.right : styles.left
          }`}
        />
      </div>
      <p className={styles.title}>{title}</p>
    </>
  )
}
