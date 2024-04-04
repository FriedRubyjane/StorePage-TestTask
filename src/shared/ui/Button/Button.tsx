import { FC } from 'react'

import styles from './Button.module.scss'

interface UpHeaderProps {
  icon?: string
  style?: string
  text: string
}

export const Button: FC<UpHeaderProps> = ({ icon, text, style }) => {
  return (
    <button
      className={
        icon ? `${styles.wrapper} ${style}` : `${styles.onlyText} ${style}`
      }
    >
      {icon ? (
        <img src={icon} alt={icon || undefined} className={styles.icon} />
      ) : null}
      <p className={styles.paragraph}>{text}</p>
    </button>
  )
}
