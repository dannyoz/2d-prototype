#pragma strict

public class Weapon extends MonoBehaviour {
    public class Weapon {
        
        public var name;
        public var power;
        public var fireRate;
        public var clipSize;
        public var spread;
        public var reload;

        public function Weapon(nm: String, pw: int, fr: int, cs: int, sp: int, rl: int) {
            name = nm;
            power = pw;
            fireRate = fr;
            clipSize = cs;
            spread = sp;
            reload = rl;
        }
    }
}

public var primary = new Weapon("Shotgun", 5, 1, 8, 3, 4);
