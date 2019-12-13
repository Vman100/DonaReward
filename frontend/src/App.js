import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SnackbarProvider } from 'notistack'
import {
  setWalletAddress,
  setLoading,
  setContract,
  setProvider,
  setBalance,
  setContributorInfo,
  setGoal,
  setCurrentMilestone,
  setPrevMilestone,
  setCharityAddress,
  setMilestoneArray,
  setIsWithdrawEnabled,
} from './actions'
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
    const balance = Number(await res.provider.getBalance(res.contract.address))
    const contributorInfo = await res.contract.contributorsDB(res.account)
    const charityAddress = await res.contract.charityAddress()
    const goal = Number(await res.contract.goal())
    const currentMilestone = Number(await res.contract.currentMilestone())
    const prevMilestone = Number(await res.contract.prevMilestone())
    const milestoneMultipler = Number(await res.contract.milestoneMultipler())
    const isWithdrawEnabled = await res.contract.isWithdrawEnabled()
    const milestoneArray = []
    milestoneArray.push(prevMilestone)
    for (let i = currentMilestone; i < goal; i += i * milestoneMultipler) {
      milestoneArray.push(i)
    }
    milestoneArray.push(goal)
    if (!contributorInfo.isContributor) {
      await addContributor(res.account, res.contract)
    }
    dispatch(setWalletAddress(res.account))
    dispatch(setContract(res.contract))
    dispatch(setProvider(res.provider))
    dispatch(setBalance(balance))
    dispatch(setContributorInfo(contributorInfo))
    dispatch(setCharityAddress(charityAddress))
    dispatch(setGoal(goal))
    dispatch(setCurrentMilestone(currentMilestone))
    dispatch(setPrevMilestone(prevMilestone))
    dispatch(setMilestoneArray(milestoneArray))
    dispatch(setIsWithdrawEnabled(isWithdrawEnabled))
    dispatch(setLoading(false))
  }

  render() {
    const { isLoading } = this.props
    const { hasErrored, message } = this.state
    return (
      <div>
        <SnackbarProvider maxSnack={3}>
          {isLoading && <Spiner></Spiner>}
          {!isLoading && hasErrored && <h3>{message}</h3>}
          {!isLoading && !hasErrored && <UserPage />}
        </SnackbarProvider>
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
