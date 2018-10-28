import React from 'react'
import styles from './styles.module.css'

const CurrencySelect = ({ onNext, onPrev, currencyName, children }) => (
  <div className={styles.wrapper}>
    <i className={styles.icon_prev} onClick={onPrev} />
    <span className={styles.currency_name}>{currencyName}</span>
    <div className={styles.children_wrapper}>{children}</div>
    <i className={styles.icon_next} onClick={onNext} />
  </div>
)

export default CurrencySelect