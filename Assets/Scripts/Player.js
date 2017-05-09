#pragma strict

public var health: int = 100;
public var alive : boolean = true;

// Bitten by enemy
function OnTriggerEnter2D(col: Collider2D) {
	if(col.gameObject.tag == "Enemy") {
		health -= 10;
		print(health);
		if (health < 0) {
			alive = false;
		}
	}
}

