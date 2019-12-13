import { combineReducers } from 'redux'
import {
  SET_LOADING,
  SET_WALLETADDRESS,
  SET_CONTRACT,
  SET_PROVIDER,
  SET_BALANCE,
  SET_CONTRIBUTORINFO,
  SET_CHARITYADDRESS,
  SET_GOAL,
  SET_CURRENTMILESTONE,
  SET_PREVMILESTONE,
  SET_MILESTONEARRAY,
  SET_ISWITHDRAWENABLED,
} from '../actions'

const user = (
  state = {
    isLoading: true,
    isWithdrawEnabled: false,
    walletAddress: undefined,
    contract: undefined,
    provider: undefined,
    balance: 0,
    contributorInfo: undefined,
    charityAddress: undefined,
    goal: 0,
    currentMilestone: 0,
    prevMilestone: 0,
    milestoneArray: [],
    donationBracket: [10, 50, 100, 500, 1000, 5000, 10000, 50000],
  },
  action
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case SET_WALLETADDRESS:
      return {
        ...state,
        walletAddress: action.walletAddress,
      }
    case SET_CONTRACT:
      return {
        ...state,
        contract: action.contract,
      }
    case SET_PROVIDER:
      return {
        ...state,
        provider: action.provider,
      }
    case SET_BALANCE:
      return {
        ...state,
        balance: action.balance,
      }
    case SET_CONTRIBUTORINFO:
      return {
        ...state,
        contributorInfo: action.contributorInfo,
      }
    case SET_CHARITYADDRESS:
      return {
        ...state,
        charityAddress: action.charityAddress,
      }
    case SET_GOAL:
      return {
        ...state,
        goal: action.goal,
      }
    case SET_CURRENTMILESTONE:
      return {
        ...state,
        currentMilestone: action.currentMilestone,
      }
    case SET_PREVMILESTONE:
      return {
        ...state,
        prevMilestone: action.prevMilestone,
      }
    case SET_MILESTONEARRAY:
      return {
        ...state,
        milestoneArray: action.milestoneArray,
      }
    case SET_ISWITHDRAWENABLED:
      return {
        ...state,
        isWithdrawEnabled: action.isWithdrawEnabled,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user,
})

export default rootReducer
