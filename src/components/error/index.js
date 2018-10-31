import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const Error = ({ onClick }) => (
  <div className={styles.wrapper}>
    <div>
      <p className={styles.alert}>
        Sorry, something <br />
        has gone wrong.
      </p>
      <span className={styles.try_again} onClick={onClick}>
        Try again
      </span>
    </div>
  </div>
)

Error.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Error
