import type { Character } from "./character";

export interface Reviveable {
  // インターフェイスを定義する
  revive(target: Character): void;
}
