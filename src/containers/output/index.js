import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectCurrencyFrom,
  selectCurrencyTo,
  selectHumanReadableRate,
  selectOutput
} from 'selectors/exchange'
import { changeCurrencyTo } from 'actions/exchange'
import CurrencySelect from 'components/currencySelect'
import getFieldStyles from 'utils/getFieldStyles'
import styles from './styles.module.css'

const Output = ({
  value,
  currencyFrom,
  currencyTo,
  rate,
  onPrevCurrency,
  onNextCurrency
}) => (
  <div>
    <CurrencySelect
      currencyName={currencyTo}
      onNext={onNextCurrency}
      onPrev={onPrevCurrency}
    >
      <div className={styles.value_wrapper}>
        <span style={getFieldStyles(value)} className={styles.value}>
          {value}
        </span>
      </div>
    </CurrencySelect>
    <div className={styles.rate_wrapper}>
      <span>
        1 {currencyFrom} = {rate} {currencyTo}
      </span>
    </div>
  </div>
)

Output.propTypes = {
  value: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  currencyFrom: PropTypes.string.isRequired,
  currencyTo: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    value: selectOutput(state),
    rate: selectHumanReadableRate(state),
    currencyFrom: selectCurrencyFrom(state),
    currencyTo: selectCurrencyTo(state)
  }
}

function mapDispatchToProps() {
  return {
    onPrevCurrency: () => changeCurrencyTo(-1),
    onNextCurrency: () => changeCurrencyTo(1)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Output)
