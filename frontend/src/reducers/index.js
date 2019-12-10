import { combineReducers } from 'redux'
import { SET_LOADING, SET_WALLETADDRESS, SET_CONTRACT } from '../actions'

const user = (
  state = {
    isLoading: true,
    walletAddress: undefined,
    contract: undefined,
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
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user,
})

export default rootReducer
