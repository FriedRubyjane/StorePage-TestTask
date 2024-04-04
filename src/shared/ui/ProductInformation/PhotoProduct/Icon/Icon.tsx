import { FC } from 'react'

import styles from './Icon.module.scss'

interface ArrowProps {
  icon: string
  style?: string
  right?: boolean
}

export const Icon: FC<ArrowProps> = ({ right = false, icon, style }) => {
  return (
    <div
      className={`${styles.wrapper} ${style} ${
        right ? styles.arrowRight : ''
      }`}
    >
      <img className={styles.arrow} src={icon} alt='Icon' />
    </div>
  )
}
