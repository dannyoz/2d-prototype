#pragma strict

public class Weapon extends MonoBehaviour {
    public class Weapon {
        
        public var name;
        public var power;
        public var fireRate;
        public var clipSize;
        public var clipCount;
        public var spread;
        public var reload;

        // Default weapon
        public function Weapon() {
            name = "Pistol";
            power = 5;
            fireRate = 18;
            clipSize = 10;
            clipCount = 10;
            spread = 0;
            reload = 0.8F;
        }

        public function Weapon(nm: String, pw: int, fr: int, cs: int, cc: int, sp:int, rl: float) {
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

// public var primary: Weapon = new Weapon(); //Pistol
public var primary: Weapon = new Weapon("Shotgun", 30, 0, 8, 5, 3, 0.8F);

public function switchWeapon(nm, pw, fr, cs, cc, sp, rl) {
    primary = new Weapon(nm, pw, fr, cs, cc, sp, rl);
}
