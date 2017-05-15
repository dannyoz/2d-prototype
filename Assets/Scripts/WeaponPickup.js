#pragma strict

enum weaponTypes { AssaultRifle, Shotgun }
public var types : weaponTypes;
public var weapon: WeaponPickup;
public var sprite1: Sprite;
public var sprite2: Sprite;

function Start() {
    selectWeapon(types);
}

public class WeaponPickup extends MonoBehaviour {
    public class WeaponPickup {
        
        public var name;
        public var power;
        public var fireRate;
        public var clipSize;
        public var clipCount;
        public var spread;
        public var reload;

        public function WeaponPickup(nm: String, pw: int, fr: int, cs: int, cc: int, sp:int, rl: float) {
            name = nm;
            power = pw;
            fireRate = fr;
            clipSize = cs;
            clipCount = cc;
            spread = sp;
            reload = rl;
        }
    }
}

function selectWeapon( currenttypes : weaponTypes ) {
    switch (currenttypes) {
        case weaponTypes.AssaultRifle: 
            weapon = new WeaponPickup("Assault rifle", 10, 29, 30, 5, 0, 0.8F);
            GetComponent(SpriteRenderer).sprite = sprite1;
            break;
        case weaponTypes.Shotgun: 
            weapon = new WeaponPickup("Shotgun", 30, 0, 8, 4, 3, 1.2F);
            GetComponent(SpriteRenderer).sprite = sprite2;
            break;
    }
}

function getWeapon() {
    return weapon;
}
