import { FC } from 'react'

import { Body } from '../../features/ui/Body/Body'
import { Footer } from '../../features/ui/Footer/Footer'
import { Header } from '../../features/ui/Header/Header'
import styles from './Product.module.scss'

export const Product: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Body />
        <Footer />
      </div>
    </>
  )
}
