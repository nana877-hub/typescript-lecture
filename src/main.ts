// main.tsは、ゲームを進行する場所

import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
import { Archer } from "./archer";
import { Priest } from "./priest";

//　登場人物を作る
const warrior = new Warrior("アーサー", 100, "エクスカリバー");
warrior.showStatus();

//　＊ここにwarrior.attack(slime);を書いても、「slimeって何？？」ってなる

const mage = new Mage("メディア", 80);
mage.showStatus();

const archer = new Archer("レオン", 100, 10);
archer.showStatus();

const slime = new Enemy("スライム", 50);
slime.showStatus();

const priest = new Priest("アリス", 100);
priest.showStatus();

// 戦闘開始！
// warrior.attack(slime); //「誰を攻撃するの？」 を渡さないといけなくなった！
// slime.showStatus();

// mage.attack(slime);
// slime.showStatus();

// archer.attack(slime);
// slime.showStatus();

// slime.attack(warrior);
// warrior.showStatus();

// どちらかが倒れる(isDead)まで戦闘を繰り返す
while (!slime.isDead() && !warrior.isDead()) {
  warrior.attack(slime);
  slime.showStatus();

  // スライムが倒れていたら戦闘終了
  if (slime.isDead()) {
    console.log(`${slime.name}を倒した`);
    break;
  }

  slime.attack(warrior);
  warrior.showStatus();

  // アーサーが倒れていたら戦闘終了
  if (warrior.isDead()) {
    console.log(`${warrior.name}は倒れた...`);
    break;
  }
}
