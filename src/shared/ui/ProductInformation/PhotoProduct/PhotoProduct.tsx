import { FC } from 'react'

import styles from './PhotoProduct.module.scss'
import { SimilarProducts } from './SimilarProducts/SimilarProducts'

export const PhotoProduct: FC = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.mainProduct}
        src='/products/main.svg'
        alt='MainProduct'
      />
      <SimilarProducts />
    </div>
  )
}
