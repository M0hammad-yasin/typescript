class Account {
  id: number;
  owner: string;
  balance: number;
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) return;
    this.balance += amount;
  }
}
let account = new Account(1, "John Doe", 1000);

account.deposit(100);
console.log(account.balance); // 1100
account.deposit(-100);
console.log(account.balance); // 1100
if (account instanceof Account) {
  console.log("account is an instance of Account");
}
