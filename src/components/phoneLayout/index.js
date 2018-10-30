import React from 'react'
import styles from './styles.module.css'

export default ({ children }) => (
  <div className={styles.phone}>
    <div className={styles.phone_shade} />
    <div className={styles.phone_speaker} />
    <div className={styles.phone_screen}>{children}</div>
    <div className={styles.phone_button} />
  </div>
)
