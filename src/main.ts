import { Person } from "./person";

type User = {
  name: string;
  age: number;
};

function introduce(user: User): string {
  return `こんにちは、私の名前は ${user.name} です。年齢は ${user.age} 歳です。`;
}

// const alice: User = { name: "Alice", age: 20 };
// console.log("function:", introduce(alice));

// const bob: User = { name: "Bob", age: 25 };
// console.log("function:", introduce(bob));

const alice = new Person("Alice", 20);
console.log("class:", alice.introduce());

const bob = new Person("Bob", 25);
console.log("class:", bob.introduce());
