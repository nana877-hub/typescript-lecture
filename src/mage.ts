import { Character } from "./character.ts";

export class Mage extends Character {
  private power: number;

  constructor(name: string, hp: number) {
    super(name, hp); // super() <- 継承元 (character) の constructor
    this.power = 10;
  }

  attack(opponent: Character) {
    console.log(`${this.name}は魔法を唱えた！`);
    opponent.takeDamage(this.power);
  }
}
