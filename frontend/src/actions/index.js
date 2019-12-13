export const SET_LOADING = 'SET_LOADING'
export const SET_WALLETADDRESS = 'SET_WALLETADDRESS'
export const SET_CONTRACT = 'SET_CONTRACT'
export const SET_PROVIDER = 'SET_PROVIDER'
export const SET_BALANCE = 'SET_BALANCE'
export const SET_CONTRIBUTORINFO = 'SET_CONTRIBUTORINFO'
export const SET_CHARITYADDRESS = 'SET_CHARITYADDRESS'
export const SET_GOAL = 'SET_GOAL'
export const SET_CURRENTMILESTONE = 'SET_CURRENTMILESTONE'
export const SET_PREVMILESTONE = 'SET_PREVMILESTONE'
export const SET_MILESTONEARRAY = 'SET_MILESTONEARRAY'
export const SET_ISWITHDRAWENABLED = 'SET_ISWITHDRAWENABLED'

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

export const setProvider = provider => ({
  type: SET_PROVIDER,
  provider,
})
export const setBalance = balance => ({
  type: SET_BALANCE,
  balance,
})

export const setContributorInfo = contributorInfo => ({
  type: SET_CONTRIBUTORINFO,
  contributorInfo,
})

export const setCharityAddress = charityAddress => ({
  type: SET_CHARITYADDRESS,
  charityAddress,
})

export const setGoal = goal => ({
  type: SET_GOAL,
  goal,
})

export const setCurrentMilestone = currentMilestone => ({
  type: SET_CURRENTMILESTONE,
  currentMilestone,
})

export const setPrevMilestone = prevMilestone => ({
  type: SET_PREVMILESTONE,
  prevMilestone,
})

export const setMilestoneArray = milestoneArray => ({
  type: SET_MILESTONEARRAY,
  milestoneArray,
})

export const setIsWithdrawEnabled = bool => ({
  type: SET_ISWITHDRAWENABLED,
  isWithdrawEnabled: bool,
})
