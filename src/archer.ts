import { Character } from "./character";

export class Archer extends Character {
  private arrows: number;
  private power: number;

  constructor(name: string, hp: number, arrows: number) {
    super(name, hp);
    this.arrows = arrows;
    this.power = 15;
  }

  attack(opponent: Character) {
    if (this.arrows <= 0) {
      console.log(`${this.name} は矢がない!`);
      return;
    }
    console.log(`${this.name} は矢を放った!`);
    opponent.takeDamage(this.power);
    this.arrows--;
  }
}
