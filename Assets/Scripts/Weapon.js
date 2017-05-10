#pragma strict

import System.IO;

public var path: String;
public var jsonString: String;
public var secondary: Weapon;
public var primary: Weapon;

function Awake() {
    path = Application.dataPath + "/Data/weapons.json";
    jsonString = File.ReadAllText(path);
    primary = new Weapon();
    primary.select(jsonString);
    Debug.Log(primary.fireRate);
    // secondary = JsonUtility.FromJson(jsonString);
    // Debug.Log(secondary);
}

@System.Serializable 
public class Weapon extends MonoBehaviour {
    public class Weapon {
        
        public var name;
        public var power;
        public var fireRate;
        public var clipSize;
        public var clipCount;
        public var spread;
        public var reload;

        public function Weapon() {
            name = "Assault rifle";
            power = 10;
            fireRate = 29;
            clipSize = 30;
            clipCount = 5;
            spread = 0;
            reload = 0.8F;
        }

        public function select(savedData: String) {
            Debug.Log(savedData);
            JsonUtility.FromJsonOverwrite(savedData, this);
        }

        // static function CreateFromJSON(jsonString: String){
        //     return JsonUtility.FromJson<Weapon>(jsonString);
        // }
    }
}
