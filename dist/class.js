"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            return;
        this.balance += amount;
    }
}
let account = new Account(1, "John Doe", 1000);
account.deposit(100);
console.log(account.balance);
account.deposit(-100);
console.log(account.balance);
if (account instanceof Account) {
    console.log("account is an instance of Account");
}
