#pragma strict

@Range(0, 50)
var health: int = 25;

@Range(1, 10)
var maxSpeed: float = 2.5;

@Range(1, 10)
var minSpeed: float = 1;

private var player : GameObject;
private var randomSpeed : float;

function Start() {
    player = GameObject.FindWithTag("Player");
    randomSpeed = Random.Range(minSpeed, maxSpeed);
}

function Update() {
    shuffle();
}

function shuffle() {
    var from = new Vector2(transform.position.x, transform.position.y);
    var to = new Vector2(player.transform.position.x, player.transform.position.y); 
    var time = randomSpeed * Time.deltaTime;
    transform.position = Vector2.MoveTowards(from, to, time);
}

function reduceHealth(loss : float) {
    health -= loss;
    if (health < 1) {
        Destroy(this.gameObject);
    }
}

function OnTriggerEnter2D(col: Collider2D) {
    if(col.gameObject.tag == "Player") {
        print("lunch");
    }
}
