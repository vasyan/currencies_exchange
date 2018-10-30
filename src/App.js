import React from 'react'
import { connect } from 'react-redux'
import Input from 'containers/input'
import Output from 'containers/output'
import { getRates } from 'actions/exchange'
import PhoneLayout from 'components/phoneLayout'
import styles from './styles.module.css'
import './index.css'

const CALL_API_TIMEOUT = 10000

class App extends React.Component {
  componentDidMount() {
    this.callApiInterval = setInterval(this.callApi, CALL_API_TIMEOUT)
    this.callApi()
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
      <PhoneLayout>
        <div className={styles.wrapper}>
          <Input />
          <Output />
        </div>
      </PhoneLayout>
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
