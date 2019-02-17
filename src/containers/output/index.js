import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectCurrencyFrom,
  selectCurrencyTo,
  selectHumanReadableRate,
  selectAmountOutput
} from 'selectors/exchange'
import { changeCurrencyTo, setAmountOutput } from 'actions/exchange'
import CurrencySelect from 'components/currencySelect'
import getFieldStyles from 'utils/getFieldStyles'
import styles from './styles.module.css'

const Output = ({
  value,
  currencyFrom,
  currencyTo,
  rate,
  onPrevCurrency,
  onNextCurrency,
  onInputChange
}) => (
  <div>
    <CurrencySelect
      currencyName={currencyTo}
      onNext={onNextCurrency}
      onPrev={onPrevCurrency}
    >
      <div className={styles.input_wrapper}>
        <input
          className={styles.input}
          value={value}
          onChange={onInputChange}
          style={getFieldStyles(value)}
          type="text"
          autoFocus
        />
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
    value: selectAmountOutput(state),
    rate: selectHumanReadableRate(state),
    currencyFrom: selectCurrencyFrom(state),
    currencyTo: selectCurrencyTo(state)
  }
}

function mapDispatchToProps() {
  return {
    onInputChange: event => setAmountOutput(event.target.value),
    onPrevCurrency: () => changeCurrencyTo(-1),
    onNextCurrency: () => changeCurrencyTo(1)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Output)
