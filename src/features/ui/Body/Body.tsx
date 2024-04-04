import { FC } from 'react'

import { ProductInformation } from '../../../shared/ui/ProductInformation/ProductInformation'
import { RouteGoods } from '../../../shared/ui/RouteGoods/RouteGoods'
import styles from './Body.module.scss'

export const Body: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <RouteGoods
          route='Каталог / Обувь / Кроссовки / Беговые'
          title='КРОССОВКИ МУЖСКИЕ SKECHERS SUNNY DALE'
        />
        <ProductInformation />
      </div>
    </div>
  )
}
