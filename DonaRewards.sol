pragma solidity ^0.5.10;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";

interface rewardInterface {
    function addMinters(address _contributor) external;
    function removeMinters(address _contributor) external;
    function isMinter(address _contributor) external returns(bool);
    function totalSupply() external view returns (uint256);
    function balanceOf(address _account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function trigger() external returns (bool);
    function withdraw() external returns (bool);
}

contract DonaRewards {

    using SafeMath for uint256;

    rewardInterface rewardsContract;

    struct Contributor {
        bool isContributor;
        uint256 donationAmount;
        uint256 tokenAmount;
        uint256 prevPercentageAmount;
        uint256 currentPercentageAmount;
    }

    uint256 public goal;
    uint256 public prevMilestone;
    uint256 public currentMilestone;
    uint256 public milestoneMultipler;
    bool public isWithdrawEnabled;
    address public donaRewardsContractAddress = address(this);
    address payable public charityAddress;
    mapping(address => Contributor) public contributorsDB;
    uint256[] public donationBracket = [10, 50, 100, 500, 1000, 5000, 10000, 50000];

    event logDonations(address _contributor, uint256 _donationAmount);
    event logContributorAdded(address _contributor);
    event logContributorRemoved(address _contributor);
    event logWithdrawel(address _contributor, uint256 _tokenAmount);

    constructor(address _rewardsContract,address payable _charityAddress,
    uint256 _goal, uint256 _milestone, uint256 _milestoneMultipler) public {
        require(_goal > 0, "goal amount must be greater then 0");
        require(_milestone > 0 && _milestone < _goal, "milestone amount must greater the 0 and less then goal amount");
        rewardsContract = rewardInterface(_rewardsContract);
        charityAddress = _charityAddress;
        if(!rewardsContract.isMinter(donaRewardsContractAddress)) {
            rewardsContract.addMinters(donaRewardsContractAddress);
        }
        goal = _goal;
        currentMilestone = _milestone;
        if(_milestoneMultipler == 0) {
            milestoneMultipler = 1;
        }else {
            milestoneMultipler = _milestoneMultipler;
        }
    }

    modifier isAuthorized() {
        require(contributorsDB[msg.sender].isContributor, "caller is not authorized");
        _;
    }

    function addContributor(address _contributor) public {
        require(!contributorsDB[msg.sender].isContributor, "contributor already added");
        contributorsDB[_contributor].isContributor = true;
        emit logContributorAdded(msg.sender);
    }

    function removeContributor(address _contributor) public {
        require(contributorsDB[_contributor].isContributor, "contributor already removed");
        contributorsDB[_contributor].isContributor = false;
        emit logContributorRemoved(msg.sender);
    }

    function donate() public isAuthorized payable {
        require(checkDonation(msg.value), "donation amount does not match any donation brackets");
        require(donaRewardsContractAddress.balance <= goal, "goal amount has been reached/contract balance cannot exceed goal amount");
        contributorsDB[msg.sender].donationAmount += msg.value;
        if(isWithdrawEnabled) {
            contributorsDB[msg.sender].currentPercentageAmount += msg.value.mul(10).div(currentMilestone.sub(prevMilestone));
        } else {
            if(contributorsDB[msg.sender].currentPercentageAmount == 0) {
                contributorsDB[msg.sender].currentPercentageAmount += msg.value.mul(10).div(currentMilestone.sub(prevMilestone));
                contributorsDB[msg.sender].prevPercentageAmount += msg.value.mul(10).div(currentMilestone.sub(prevMilestone));
            } else if(donaRewardsContractAddress.balance >= currentMilestone) {
                contributorsDB[msg.sender].currentPercentageAmount = donaRewardsContractAddress.balance.sub(currentMilestone)
                .mul(10).div(currentMilestone.sub(prevMilestone));
                contributorsDB[msg.sender].prevPercentageAmount += msg.value.sub(donaRewardsContractAddress.balance.sub(currentMilestone))
                .mul(10).div(currentMilestone.sub(prevMilestone));
            } else {
                contributorsDB[msg.sender].currentPercentageAmount += msg.value.mul(10).div(currentMilestone.sub(prevMilestone));
                contributorsDB[msg.sender].prevPercentageAmount = contributorsDB[msg.sender].currentPercentageAmount;
            }
        }
        if(donaRewardsContractAddress.balance >= currentMilestone) {
            rewardsContract.trigger();
            rewardsContract.withdraw();
            isWithdrawEnabled = true;
            if(milestoneMultipler == 1) {
                prevMilestone = currentMilestone;
                currentMilestone += currentMilestone;
            } else {
                prevMilestone = currentMilestone;
                currentMilestone += currentMilestone.mul(milestoneMultipler);
            }
            if(currentMilestone > goal) {
                currentMilestone = goal;
            }
        }
        emit logDonations(msg.sender, msg.value);
        if(donaRewardsContractAddress.balance == goal) {
            charityAddress.transfer(donaRewardsContractAddress.balance);
        }

    }

    function withdraw() public isAuthorized {
        uint256 amount = calculateRewards();
        require(amount > 0,"calculated rewards amount must be greater then 0");
        rewardsContract.transfer(msg.sender, amount);
        contributorsDB[msg.sender].prevPercentageAmount = contributorsDB[msg.sender].currentPercentageAmount
        .sub(contributorsDB[msg.sender].prevPercentageAmount);
        contributorsDB[msg.sender].currentPercentageAmount = contributorsDB[msg.sender].prevPercentageAmount;
        if(rewardsContract.balanceOf(donaRewardsContractAddress) == 0) {
            isWithdrawEnabled = false;
        }
        emit logWithdrawel(msg.sender, amount);
    }

    function calculateRewards() private returns(uint256) {
        uint256 tokenBalance = rewardsContract.totalSupply();
        contributorsDB[msg.sender].tokenAmount = tokenBalance.mul(contributorsDB[msg.sender].prevPercentageAmount).div(10);
        return contributorsDB[msg.sender].tokenAmount;
    }

    function checkDonation(uint256 _amount) private view returns(bool) {
        for(uint256 i = 0; i < donationBracket.length; i++) {
            if(_amount == donationBracket[i]) {
                return true;
            }
        }
        return false;
    }
}