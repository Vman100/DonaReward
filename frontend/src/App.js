import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setWalletAddress, setLoading, setContract } from './actions'
import { addContributor } from './contractFunctions'
import UserPage from './components/UserPage.js'
import { SetupWeb3 } from './SetupWeb3'
import Spiner from './Spiner.js'

window.ethereum.on('accountsChanged', function() {
  window.location.reload()
})

class App extends React.Component {
  state = {}

  async componentDidMount() {
    const { dispatch } = this.props
    const res = await SetupWeb3()
    this.setState({ ...res })
    const ContributorInfo = await res.contract.contributorsDB(res.account)
    if (!ContributorInfo.isContributor) {
      addContributor(res.account, res.contract)
    }
    dispatch(setWalletAddress(res.account))
    dispatch(setContract(res.contract))
    dispatch(setLoading(false))
  }

  render() {
    const { isLoading } = this.props
    const { hasErrored, message } = this.state
    return (
      <div>
        {isLoading && <Spiner></Spiner>}
        {!isLoading && hasErrored && <h3>{message}</h3>}
        {!isLoading && !hasErrored && <UserPage />}
      </div>
    )
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { isLoading, walletAddress } = state.user
  return {
    isLoading,
    walletAddress,
  }
}

export default connect(mapStateToProps)(App)
