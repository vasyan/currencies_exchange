import React from 'react'
import { connect } from 'react-redux'
import {
  selectCurrencyFrom,
  selectCurrencyTo,
  selectRate,
  selectOutput
} from 'selectors/exchange'
import { changeCurrencyTo } from 'actions/exchange'
import CurrencySelect from 'components/currencySelect'
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
        <span>{value}</span>
      </div>
    </CurrencySelect>
    <div className={styles.rate_wrapper}>
      <span>
        1 {currencyFrom} = {rate} {currencyTo}
      </span>
    </div>
  </div>
)

function mapStateToProps(state) {
  return {
    value: selectOutput(state),
    rate: selectRate(state),
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
