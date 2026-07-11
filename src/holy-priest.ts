import { Character } from "./character";
import type { Healable } from "./healable";
import type { Reviveable } from "./reviveable";

// extends , implements を正しく設定する
export class HolyPriest extends Character implements Healable, Reviveable {
  attack() {
    // 攻撃できないログを出す
    console.log(`${this.name}は攻撃できない`);
  }

  heal(target: Character) {
    target.takeHeal(15);
  }

  revive(target: Character) {
    target.isDead();
  }
}
