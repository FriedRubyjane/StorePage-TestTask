import { FC } from 'react'

import { DownHeaderRight } from '../../../../app/data/header'
import styles from './DownHeader.module.scss'

export const DownHeader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <div className={styles.itemRight}>
          {DownHeaderRight.map(item => {
            return (
              <p key={item.id} className={styles.paragraph}>
                {item.text}
              </p>
            )
          })}
        </div>
        <div className={styles.itemLeft}>
          <div className={styles.cardManager}>
            <img src='/icons/message.svg' alt='Manager' />
            <p>Ваш менеджер</p>
          </div>
          <div className={styles.cardPercent}>
            <img src='/icons/percent.svg' alt='Manager' />
            <p>Акции</p>
          </div>
          <div className={styles.cardBlog}>
            <p>Блог</p>
          </div>
        </div>
      </div>
    </div>
  )
}
