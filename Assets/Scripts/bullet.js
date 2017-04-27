#pragma strict

var power : float = 10;

function OnCollisionEnter2D (col : Collision2D) {
    if(col.gameObject.tag == "Enemy") {
        print(col.gameObject);
        col.gameObject.SendMessage("reduceHealth", power);
        Destroy(this.gameObject);
    }
}
