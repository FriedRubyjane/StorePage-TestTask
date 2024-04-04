import { FC } from 'react'

import { DownHeader } from './DownHeader/DownHeader'
import styles from './Header.module.scss'
import { UpHeader } from './UpHeader/UpHeader'

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <UpHeader />
      <DownHeader />
    </div>
  )
}
