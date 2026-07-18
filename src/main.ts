import type { Character } from "./character";
import { Enemy } from "./enemy";
import { Magician } from "./magician";
import { Warrior } from "./warrior";

const enemy = new Enemy("ドラゴン", 200);
const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const magician = new Magician("メディア", 80);

// 味方パーティを「共通の型」の配列でまとめる
const party: Character[] = [warrior, magician];
let battleOver = false;

while (true) {
  // TODO 1: 味方の攻撃 — for...of で party を回し、
  //         生存している (isDead() でない) 味方だけが enemy を攻撃する
  for (const member of party) {
    console.log(member);
    if (!member.isDead()) {
      member.attack(enemy);
    }
    // TODO 2: 敵が倒れていたら「ドラゴンを倒した！」と表示して終了
    if (enemy.isDead()) {
      battleOver = true;
      console.log(`${enemy.name}を倒した！`);
      break;
    }
  }
  if (battleOver) break;
}

// TODO 3: 敵の反撃 — 生存している味方(最初の1人でOK)に attack
const aliveParty = party.filter((m) => !m.isDead());
enemy.attack(aliveParty[0]);

// TODO 4: 味方が全滅していたら「パーティは全滅した...」と表示して終了
//         ヒント: party.every((m) => m.isDead())
if (party.every((m) => m.isDead())) {
  console.log("パーティは全滅した");
}

// TODO 5: 全員の showStatus()
for (const member of party) {
  member.showStatus();
}
enemy.showStatus();

// どちらかが倒れる(isDead)まで戦闘を繰り返す
// while (!slime.isDead() && !warrior.isDead()) {
//   warrior.attack(slime);
//   slime.showStatus();

//   // スライムが倒れていたら戦闘終了
//   if (slime.isDead()) {
//     console.log(`${slime.name}を倒した`);
//     break;
//   }

//   slime.attack(warrior);
//   warrior.showStatus();

//   // アーサーが倒れていたら戦闘終了
//   if (warrior.isDead()) {
//     console.log(`${warrior.name}は倒れた...`);
//     break;
//   }
// }
