class Account {
  private readonly id: number;
  private owner: string;
  private _balance: number;
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) return;
    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) return;
    this._balance += value;
  }
}
let account = new Account(1, "John Doe", 1000);
console.log(account.balance);
account.balance = 100;
console.log(account.balance);
// account.deposit(100);
// console.log(account.balance); // 1100
// account.deposit(-100);
// console.log(account.balance); // 1100
// if (account instanceof Account) {
//   console.log("account is an instance of Account");
// }
