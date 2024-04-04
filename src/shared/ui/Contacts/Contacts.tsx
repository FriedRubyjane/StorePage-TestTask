import { FC } from 'react'

import { Item } from '../ProductInformation/Information/Characteristics/Item/Item'
import styles from './Contacts.module.scss'

export const Contacts: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contacts}>
        <img src='/icons/brand.svg' alt='Logo' className={styles.logo} />
        <Item
          style={styles.contactsSupport}
          title='8 800 841-95-95'
          name='Служба поддержки'
        />
        <Item
          style={styles.contactsSupport}
          title='support@sport.ru'
          name='Служба поддержки'
        />
      </div>
      <div className={styles.buttons}>
        <p className={styles.paragraph}>Вакансии</p>
        <p className={styles.paragraph}>Блог</p>
        <p className={styles.paragraph}>Акции</p>
      </div>
    </div>
  )
}
