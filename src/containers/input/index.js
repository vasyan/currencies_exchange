import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setAmountInput, changeCurrencyFrom } from 'actions/exchange'
import { selectCurrencyFrom, selectAmountInput } from 'selectors/exchange'
import CurrencySelect from 'components/currencySelect'
import getFieldStyles from 'utils/getFieldStyles'
import styles from './styles.module.css'

const Input = ({
  value,
  onInputChange,
  onNextCurrency,
  onPrevCurrency,
  currency
}) => (
  <div className={styles.wrapper}>
    <CurrencySelect
      currencyName={currency}
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
  </div>
)

Input.propTypes = {
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    currency: selectCurrencyFrom(state),
    value: selectAmountInput(state)
  }
}

function mapDispatchToProps(state) {
  return {
    onInputChange: event => setAmountInput(event.target.value),
    onPrevCurrency: () => changeCurrencyFrom(1),
    onNextCurrency: () => changeCurrencyFrom(-1)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Input)
