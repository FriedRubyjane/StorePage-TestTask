import React, { FC } from 'react'

import { Interactions } from '../../../app/data/header'
import styles from './Interaction.module.scss'

export const Interaction: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {Interactions.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <img className={styles.icon} src={item.icon} alt={item.alt} />
              {index !== Interactions.length - 1 && (
                <div className={styles.divider} />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
