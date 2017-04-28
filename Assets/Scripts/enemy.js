#pragma strict

var speed = 1;
private var target : GameObject;

function Update() {
    target = GameObject.Find("Hero");
    shuffle();
}

function shuffle() {
    var from = new Vector2(transform.position.x, transform.position.y);
    var to = new Vector2(target.transform.position.x, target.transform.position.y);
    var time = speed * Time.deltaTime;
    transform.position = Vector2.MoveTowards(from, to, time);
}

function reduceHealth(loss : float) {
    print(loss);
    Destroy(this.gameObject);
}

// function OnTriggerEnter2D(col: Collider2D) {
//     if(col.gameObject.tag == "Player") {
//         print("lunch");
//     }
// }
