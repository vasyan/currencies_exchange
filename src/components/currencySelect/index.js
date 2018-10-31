import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const CurrencySelect = ({ onNext, onPrev, currencyName, children }) => (
  <div className={styles.wrapper}>
    <i className={styles.icon_prev} onClick={onPrev} />
    <div className={styles.currency_name}>{currencyName}</div>
    <div className={styles.children_wrapper}>{children}</div>
    <i className={styles.icon_next} onClick={onNext} />
  </div>
)

CurrencySelect.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  currencyName: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default CurrencySelect
