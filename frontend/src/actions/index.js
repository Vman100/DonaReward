export const SET_LOADING = 'SET_LOADING'
export const SET_WALLETADDRESS = 'SET_WALLETADDRESS'
export const SET_CONTRACT = 'SET_CONTRACT'

export const setLoading = bool => ({
  type: SET_LOADING,
  isLoading: bool,
})

export const setWalletAddress = walletAddress => ({
  type: SET_WALLETADDRESS,
  walletAddress,
})

export const setContract = contract => ({
  type: SET_CONTRACT,
  contract,
})
