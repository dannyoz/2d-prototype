#pragma strict

var delay: float = 0;
var interval: float = 2.5;
var enemy: GameObject;

@Range(0, 150)
var count: int = 100;
private var spawns: int = 0;

InvokeRepeating("spawn", delay, interval);

function spawn() {
    if(spawns < count) {
        var newEnemy = Instantiate(enemy, transform.position, transform.rotation);
        spawns ++;
    }
}
