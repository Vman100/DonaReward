pragma solidity ^0.5.10;

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
    
    rewardInterface rewardsContract;
    
    struct Contributor {
        bool isContributor;
        uint256 donationAmount;
        uint256 tokenAmount;
        uint256 prevPercentageAmount;
        uint256 currentPercentageAmount;
    }
    
    uint256 public goal;
    uint256 public milestone;
    uint256 public milestoneMultipler;
    bool public isWithdrawEnabled;
    address public donaRewardsContractAddress = address(this);
    mapping(address => Contributor) public contributorsDB;
    uint256[] public donationBracket = [10, 50, 100, 500, 1000, 5000, 10000, 50000];
    
    constructor(address _rewardsContract, uint256 _goal, uint256 _milestone, uint256 _milestoneMultipler) public {
        require(_goal > 0, "goal amount must be greater then 0");
        require(_milestone > 0 && _milestone < _goal, "milestone amount must greater the 0 and less then goal amount");
        rewardsContract = rewardInterface(_rewardsContract);
        if(!rewardsContract.isMinter(donaRewardsContractAddress)) {
            rewardsContract.addMinters(donaRewardsContractAddress);
        }
        goal = _goal;
        milestone = _milestone;
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
        
    }
    
    function removeContributor(address _contributor) public {
        require(contributorsDB[_contributor].isContributor, "contributor already removed");
        contributorsDB[_contributor].isContributor = false;
    }
    
    function donate() public isAuthorized payable {
        require(checkDonation(msg.value), "donation amount does not match any donation brackets");
        
        contributorsDB[msg.sender].donationAmount += msg.value;
        if(donaRewardsContractAddress.balance == milestone) {
            contributorsDB[msg.sender].prevPercentageAmount += msg.value * 10 / milestone;
            rewardsContract.trigger();
            rewardsContract.withdraw();
            isWithdrawEnabled = true;
        } else if(donaRewardsContractAddress.balance > milestone) {
            contributorsDB[msg.sender].prevPercentageAmount += (msg.value - (donaRewardsContractAddress.balance - milestone)) * 10 / milestone;
            rewardsContract.trigger();
            rewardsContract.withdraw();
            isWithdrawEnabled = true;
        }
        if(isWithdrawEnabled) {
            contributorsDB[msg.sender].currentPercentageAmount += msg.value * 10 / milestone;
            if(milestoneMultipler == 1) {
                milestone += milestone;
            } else {
                milestone += milestone * milestoneMultipler;
            }
            if(milestone > goal) {
                milestone = goal;
            }
        } else {
            if(contributorsDB[msg.sender].currentPercentageAmount == 0) {
                contributorsDB[msg.sender].prevPercentageAmount += msg.value * 10 / milestone;
            } else {
                contributorsDB[msg.sender].prevPercentageAmount = contributorsDB[msg.sender].currentPercentageAmount;
            }
            contributorsDB[msg.sender].currentPercentageAmount += msg.value * 10 / milestone;
        }
    }
    
    function totalSupply() public view returns(uint256) {
        return rewardsContract.totalSupply();
    }
    
     function balanceOf(address _account) public view returns(uint256) {
        return rewardsContract.balanceOf(_account);
    }
    
    function withdraw() public isAuthorized {
        uint256 amount = calculateRewards();
        require(amount >0);
        rewardsContract.transfer(msg.sender, amount);
        if(balanceOf(donaRewardsContractAddress) == 0) {
            isWithdrawEnabled = false;
        }
    }
    
    function calculateRewards() private returns(uint256) {
        uint256 tokenBalance = rewardsContract.totalSupply();
        contributorsDB[msg.sender].tokenAmount = tokenBalance * contributorsDB[msg.sender].prevPercentageAmount / 10;
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