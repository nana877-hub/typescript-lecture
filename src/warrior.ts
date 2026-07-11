import { Character } from "./character.ts";

export class Warrior extends Character {
  private weapon: string;
  private power: number;

  constructor(name: string, hp: number, weapon: string) {
    super(name, hp); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
    this.power = 20;
  }

  attack(opponent: Character) {
    console.log(`${this.name}は${this.weapon}で攻撃した！`);

    // TODO: opponent の hp を power だけ減らす
    opponent.takeDamage(this.power);
  }
}
