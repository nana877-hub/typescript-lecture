export class Person {
  // プロパティ (クラスが持つデータ)
  name: string;
  age: number;

  // コンストラクタ
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // メソッド (クラスが持つ処理)
  introduce(): string {
    return `こんにちは、私の名前は ${this.name} です。年齢は ${this.age} 歳です。`;
  }
}
