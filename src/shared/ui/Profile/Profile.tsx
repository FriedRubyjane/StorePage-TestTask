import { FC } from 'react'

import styles from './Profile.module.scss'

interface ProfileProps {
  avatar: string
  name: string
}

export const Profile: FC<ProfileProps> = ({ avatar, name }) => {
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt='Avatar' className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <img
        src='/icons/arrowDown.svg'
        alt='Avatar'
        className={styles.arrowIcon}
      />
    </div>
  )
}
