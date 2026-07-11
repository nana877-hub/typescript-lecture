import { Character } from "./character";
import type { Healable } from "./healable";

export class Priest extends Character implements Healable {
  attack() {
    console.log(`${this.name}は攻撃できない`);
  }

  heal(target: Character) {
    target.takeHeal(10);
  }
}
