#pragma strict

@Range(0, 30)
var power : float = 10;

@Range(0, 30)
var range : int = 15;

private var distance : int = 0;

function Update() {
    distance ++;
    if(distance == range) {
        Destroy(this.gameObject);
    }
}

function OnCollisionEnter2D (col : Collision2D) {
    if(col.gameObject.tag == "Enemy") {
        print(col.gameObject);
        col.gameObject.SendMessage("reduceHealth", power);
        Destroy(this.gameObject);
    }
}
