module.exports = {
  address: '0x535ee2Affb7C1fC3019DEAC733E26D5AAF8B95D1',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'milestoneMultipler',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'donaRewardsContractAddress',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'prevMilestone',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      name: 'contributorsDB',
      outputs: [
        {
          name: 'isContributor',
          type: 'bool',
        },
        {
          name: 'donationAmount',
          type: 'uint256',
        },
        {
          name: 'tokenAmount',
          type: 'uint256',
        },
        {
          name: 'prevPercentageAmount',
          type: 'uint256',
        },
        {
          name: 'currentPercentageAmount',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'withdraw',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'goal',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isWithdrawEnabled',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      name: 'donationBracket',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'charityAddress',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'currentMilestone',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_contributor',
          type: 'address',
        },
      ],
      name: 'removeContributor',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_contributor',
          type: 'address',
        },
      ],
      name: 'addContributor',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'donate',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          name: '_rewardsContract',
          type: 'address',
        },
        {
          name: '_charityAddress',
          type: 'address',
        },
        {
          name: '_goal',
          type: 'uint256',
        },
        {
          name: '_milestone',
          type: 'uint256',
        },
        {
          name: '_milestoneMultipler',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_contributor',
          type: 'address',
        },
        {
          indexed: false,
          name: '_donationAmount',
          type: 'uint256',
        },
      ],
      name: 'logDonations',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_contributor',
          type: 'address',
        },
      ],
      name: 'logContributorAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_contributor',
          type: 'address',
        },
      ],
      name: 'logContributorRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_contributor',
          type: 'address',
        },
        {
          indexed: false,
          name: '_tokenAmount',
          type: 'uint256',
        },
      ],
      name: 'logWithdrawel',
      type: 'event',
    },
  ],
}
