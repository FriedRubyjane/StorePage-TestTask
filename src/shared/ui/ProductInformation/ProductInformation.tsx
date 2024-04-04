import { FC } from 'react'

import { Information } from './Information/Information'
import { PhotoProduct } from './PhotoProduct/PhotoProduct'
import styles from './ProductInformation.module.scss'

export const ProductInformation: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <PhotoProduct />
        <Information />
      </div>
    </div>
  )
}
