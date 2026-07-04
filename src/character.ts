export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number;
  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  public takeDamage(damage: number): void {
    this.hp = this.hp - damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  // hpが0以下かどうかを返す
  isDead(): boolean {
    return this.hp <= 0;
  }

  //攻撃する相手を引数に取る 抽象メソッドなので中身はなし
  abstract attack(opponent: Character): void;
}
