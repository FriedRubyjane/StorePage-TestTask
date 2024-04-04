import { FC } from 'react'

import { Characteristics } from './Characteristics/Characteristics'
import { Description } from './Description/Description'
import styles from './Information.module.scss'

export const Information: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Characteristics />
      <Description />
    </div>
  )
}
