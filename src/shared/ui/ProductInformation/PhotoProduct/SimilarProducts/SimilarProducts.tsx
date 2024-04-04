import { FC } from 'react'

import { similarProducts } from '../../../../../app/data/similarProducts'
import { Icon } from '../Icon/Icon'
import styles from './SimilarProducts.module.scss'

export const SimilarProducts: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Icon icon='/icons/bigArrowLeft.svg' style={styles.arrow} />
      {similarProducts.map(item => {
        return (
          <img
            key={item.id}
            src={item.icon}
            alt={item.alt}
            className={styles.similarProduct}
          />
        )
      })}
      <Icon right icon='/icons/bigArrowLeft.svg' style={styles.arrow} />
    </div>
  )
}
