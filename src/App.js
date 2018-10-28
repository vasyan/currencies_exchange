import React from 'react'
import { connect } from 'react-redux'
import Input from 'containers/input'
import Output from 'containers/output'
import { getRates } from 'actions/exchange'
import PhoneMock from 'components/phoneMock'
import styles from './styles.module.css'
import './index.css'

const CALL_API_TIMEOUT = 1200000

class App extends React.Component {
  componentDidMount() {
    this.callApi()
    this.callApiInterval = setInterval(this.callApi, CALL_API_TIMEOUT)
  }

  componentWillUnmount() {
    clearInterval(this.callApiInterval)
    this.callApiInterval = null
  }

  callApi = () => {
    this.props.getRates()
  }

  render() {
    return (
      <PhoneMock>
        <div className={styles.wrapper}>
          <Input />
          <Output />
        </div>
      </PhoneMock>
    )
  }
}

function mapDispatchToProps() {
  return {
    getRates
  }
}

export default connect(
  null,
  mapDispatchToProps()
)(App)
