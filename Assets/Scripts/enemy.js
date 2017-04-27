#pragma strict

var aPosition1 = new Vector2(3,3);
var speed = 1;
private var target : GameObject;

function Update() {
    shuffle();
}

function shuffle() {
    target = GameObject.Find("Hero");
    var from = new Vector2(transform.position.x, transform.position.y);
    var to = new Vector2(target.transform.position.x, target.transform.position.y);
    var time = speed * Time.deltaTime;
    transform.position = Vector2.MoveTowards(from, to, time);
}

function reduceHealth(loss : float) {
    print(loss);
    Destroy(this.gameObject);
}

function OnCollisionEnter2D (col : Collision2D) {
    if(col.gameObject.tag == "Projectile") {
        print(col.gameObject);
    }
}
