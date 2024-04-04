import { FC } from 'react'

import { Contacts } from '../../../shared/ui/Contacts/Contacts'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.divider} />
      <Contacts />
      <div className={styles.divider} />
    </div>
  )
}
