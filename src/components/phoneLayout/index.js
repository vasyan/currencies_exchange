import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const PhoneLayout = ({ children }) => (
  <div className={styles.phone}>
    <div className={styles.phone_shade} />
    <div className={styles.phone_speaker} />
    <div className={styles.phone_screen}>{children}</div>
    <div className={styles.phone_button} />
  </div>
)

PhoneLayout.propTypes = {
  children: PropTypes.any
}

export default PhoneLayout
