import { Character } from "./character";
import type { Healable } from "./healable";
import type { Reviveable } from "./reviveable";

// extends , implements を正しく設定する
export class HolyPriest extends XXX implements XXX {
  attack() {
    // 実装する
  }

  heal(target: Character) {
    // 実装する
  }

  revive(target: Character) {
    // 実装する
  }
}
