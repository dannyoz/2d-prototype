#pragma strict

import UnityEngine.UI;

public var health: int = 100;
public var alive : boolean = true;
public var textField : UI.Text;

// Bitten by enemy
function OnTriggerEnter2D(col: Collider2D) {
	if(col.gameObject.tag == "Enemy") {
		health -= 10;
		print(health);
		if (health < 0) {
			alive = false;
            textField.text = "Game Over";
		}
	}
}
