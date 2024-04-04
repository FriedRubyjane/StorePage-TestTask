import { FC } from 'react'

import { characteristics } from '../../../../../app/data/mainProduct'
import { Price } from '../Price/Price'
import styles from './Characteristics.module.scss'
import { Item } from './Item/Item'

export const Characteristics: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Price
        price={characteristics[0].price}
        discount={characteristics[0].discount}
        priceWithoutDiscount={characteristics[0].priceWithoutDiscount}
        amountInPackage={characteristics[0].amountInPackage}
        delivery={characteristics[0].delivery}
        amount={characteristics[0].amount}
        city={characteristics[0].city}
      />
      <div className={styles.divider} />
      <div className={styles.characteristics}>
        <h2 className={styles.title}>Характеристики</h2>
        <div className={styles.characteristicsList}>
          <Item
            style={styles.item}
            title={characteristics[0].сodeSupplier}
            name='Код поставщика'
          />
          <Item
            style={styles.item}
            title={characteristics[0].сodeRAEC}
            name='Код РАЭК'
          />
          <Item
            style={styles.item}
            title={characteristics[0].brand}
            name='Бренд'
          />
          <Item
            style={styles.item}
            title={characteristics[0].codeManufacturer}
            name='Код производителя'
          />
          <Item
            style={styles.item}
            title={characteristics[0].codeVendor}
            name='Артикул'
          />
          <Item
            style={styles.item}
            title={characteristics[0].codeETM}
            name='Код ETM'
          />
          <Item
            style={styles.item}
            title={characteristics[0].series}
            name='Серия'
          />
        </div>
      </div>
    </div>
  )
}
