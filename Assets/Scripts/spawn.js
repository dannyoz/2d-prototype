#pragma strict

var delay: float = 0;
var interval: float = 2.5;
var enemy: GameObject;

InvokeRepeating("spawn", delay, interval);

function spawn() {
    var newEnemy = Instantiate(enemy, transform.position, transform.rotation);
}
