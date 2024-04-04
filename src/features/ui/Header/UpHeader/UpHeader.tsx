import { FC } from 'react'

import { Basket } from '../../../../shared/ui/Basket/Basket'
import { Button } from '../../../../shared/ui/Button/Button'
import { Input } from '../../../../shared/ui/Input/Input'
import { Interaction } from '../../../../shared/ui/Interaction/Interaction'
import { Profile } from '../../../../shared/ui/Profile/Profile'
import styles from './UpHeader.module.scss'

export const UpHeader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <img src='/icons/brand.svg' alt='Logo' className={styles.logo} />
        <Button icon='/icons/menu.svg' text='Меню' />
      </div>
      <Input />
      <div className={styles.item}>
        <Interaction />
        <Basket sum='144 235₽' />
        <Profile avatar='/icons/avatar.svg' name='Ермаков Е.' />
      </div>
    </div>
  )
}
