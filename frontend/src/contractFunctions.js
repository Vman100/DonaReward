export const addContributor = async (contributorAddress, contract) => {
  try {
    const tx = await contract.addContributor(contributorAddress)
    const receipt = await tx.wait(2)
    const log = receipt.events.pop().args
    return { log, hasErrored: false }
  } catch (error) {
    return { error, hasErrored: true }
  }
}

export const removeContributor = async (contributorAddress, contract) => {
  try {
    const tx = await contract.removeContributor(contributorAddress)
    const receipt = await tx.wait(2)
    const log = receipt.events.pop().args
    return { log, hasErrored: false }
  } catch (error) {
    return { error, hasErrored: true }
  }
}

export const donate = async (donationAmount, contract) => {
  try {
    const tx = await contract.donate({ value: donationAmount })
    const receipt = await tx.wait(2)
    const log = receipt.events.pop().args
    return { log, hasErrored: false }
  } catch (error) {
    return { error, hasErrored: true }
  }
}

export const withdraw = async contract => {
  try {
    const tx = await contract.withdraw()
    const receipt = await tx.wait(2)
    const log = receipt.events.pop().args
    return { log, hasErrored: false }
  } catch (error) {
    return { error, hasErrored: true }
  }
}
