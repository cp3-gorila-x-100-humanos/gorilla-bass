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

function gorillaDefend() {
    defending = true;
    log("🛡️ O gorila está se defendendo por 1 turno!");
    setTimeout(() => defending = false, 1000);
}

function gorillaHeal() {
    const heal = Math.floor(Math.random() * 11) + 10;
    gorillaLife = Math.min(gorillaLife + heal, 100);
    log(`❤️ O gorila se curou em ${heal} pontos de vida.`);
    updateStatus();
}

function updateStatus() {
    document.getElementById('gorilla-life').style.width = `${gorillaLife}%`;
    document.getElementById('gorilla-life-text').textContent = gorillaLife;
    const alive = humans.filter(h => h).length;
    document.getElementById('humans-count').textContent = alive;
}

function showAttackEffect() {
  const effect = document.getElementById("attack-effect");
  effect.style.display = "block";
  setTimeout(() => effect.style.display = "none", 300);
}