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
    if (!target.isDead()) {
      target.takeHeal(15);
    } else {
      console.log(`${target.name}は死んでいるので回復できない`);
    }
  }

  revive(target: Character) {
    if (target.isDead()) {
      target.takeHeal(100);
      console.log(`${target.name}を蘇生した！`);
    } else {
      console.log(`${target.name}はまだ倒れていない`);
    }
  }
}
