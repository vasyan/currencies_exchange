import React from 'react'
import { connect } from 'react-redux'
import config from 'config'
import { selectShowError, selectIsOnLoading } from 'selectors/app'
import Input from 'containers/input'
import Output from 'containers/output'
import { getRates } from 'actions/exchange'
import Loader from 'components/loader'
import PhoneLayout from 'components/phoneLayout'
import Error from 'components/error'
import styles from './styles.module.css'
import './index.css'

class App extends React.Component {
  componentDidMount() {
    this.callApi()
    // this.startApiPool()
  }

  componentWillUnmount() {
    this.clearPoolInterval()
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.isOnLoading &&
      !prevProps.showError &&
      !this.props.isOnLoading &&
      this.props.showError
    ) {
      this.clearPoolInterval()
    }
  }

  startApiPool() {
    this.callApiInterval = setInterval(this.callApi, config.apiPoolInterval)
  }

  clearPoolInterval = () => {
    clearInterval(this.callApiInterval)
    this.callApiInterval = null
  }

  callApi = () => {
    this.props.getRates()
  }

  handleTryAgain = () => {
    this.startApiPool()
    this.callApi()
  }

  render() {
    const { isOnLoading, showError } = this.props

    return (
      <PhoneLayout>
        <div className={styles.wrapper}>
          {isOnLoading ? <Loader /> : null}
          {!isOnLoading && !showError ? (
            <>
              <Input />
              <Output />
            </>
          ) : null}
          {showError ? <Error onClick={this.handleTryAgain} /> : null}
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

function mapStateToProps(state) {
  return {
    showError: selectShowError(state),
    isOnLoading: selectIsOnLoading(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App)
