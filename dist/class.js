"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            return;
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            return;
        this._balance = value;
    }
}
let account = new Account(1, "John Doe", 1000);
console.log(account.balance);
account.balance = 100;
console.log(account.balance);
