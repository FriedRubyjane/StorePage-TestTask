import { FC } from 'react'

import styles from './Input.module.scss'

export const Input: FC = () => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type='text'
        placeholder='Название запроса'
      />
      <div className={styles.items}>
        <img className={styles.icon} src='/icons/cross.svg' alt='Cross' />
        <img
          className={styles.icon}
          src='/icons/magnifyingGlass.svg'
          alt='MagnifyingGlass'
        />
      </div>
    </div>
  )
}
