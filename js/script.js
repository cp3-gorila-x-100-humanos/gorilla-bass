let gorillaLife = 100;
let humans = Array(100).fill(true);
let defending = false;
let attackInterval;


function gorillaAttack() {
  showAttackEffect();
  const toKill = Math.floor(Math.random() * 6) + 3;
  let killed = 0;
  for (let i = 0; i < humans.length && killed < toKill; i++) {
    if (humans[i]) {
      humans[i] = false;
      killed++;
    }
  }
  log(`🦍 O gorila atacou e derrotou ${killed} humanos.`);
  checkEndGame();
  updateStatus();
}