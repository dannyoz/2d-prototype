#pragma strict

import UnityEngine.UI;

public var health: int = 100;
public var alive : boolean = true;
public var textField : UI.Text;

private var weapon : Weapon;

function Awake(){
    weapon = GetComponent(Weapon);
    Debug.Log(weapon.primary.name);
}

// Bitten by enemy
function OnTriggerEnter2D(col: Collider2D) {
	if(col.gameObject.tag == "Enemy") {
		bitten();
	}

    if(col.gameObject.tag == "Weapon") {
        var weaponPickup = col.gameObject.GetComponent(WeaponPickup);
        var newWeapon = weaponPickup.getWeapon();
        print(newWeapon.fireRate);
        //primary = newWeapon;
	}
}

function bitten() {
    health -= 10;
    print(health);
    if (health < 0) {
        alive = false;
        textField.text = "Game Over";
    }
}

