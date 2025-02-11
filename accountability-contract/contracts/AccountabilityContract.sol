// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract AccountabilityContract {
    struct Task {
        string description;
        bool isCompleted;
    }

    Task[] public tasks;
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createTask(string memory _description) public onlyOwner {
        tasks.push(Task(_description, false));
    }

    function depositFunds() public payable onlyOwner {
        require(msg.value > 0, "You need to send some ether");
    }

    function withdrawDeposit() public onlyOwner {
        uint256 amount = address(this).balance;
        require(amount > 0, "There are no funds to withdraw");
        payable(owner).transfer(amount);
    }

    function allTasksCompleted() private view returns (bool) {
        for (uint256 i = 0; i < tasks.length; i++) {
            if (!tasks[i].isCompleted) {
                return false;
            }
        }
        return true;
    }

    function clearTasks() private {
        delete tasks;
    }

    function completeTask(uint256 _taskId) public onlyOwner {
        require(_taskId < tasks.length, "Task does not exist");
        require(!tasks[_taskId].isCompleted, "Task is already completed");

        tasks[_taskId].isCompleted = true;

        if (allTasksCompleted()) {
            uint256 amount = address(this).balance;
            payable(owner).transfer(amount);
            clearTasks();
        }
    }

    function getTaskCount() public view returns (uint256) {
        return tasks.length;
    }

    function getDeposit() public view returns (uint256) {
        return address(this).balance;
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks;
    }
}
