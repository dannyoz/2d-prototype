#pragma strict

public var bullet: GameObject;

@Range(0, 100)
public var bulletThrust: float = 85;

@Range(0, 30)
public var fireRate: int = 15;

private var primaryIndex : int = 0;
private var canFirePrimary : boolean = true;
private var computedFire : float;
private var player : Player;
private var weapon : Weapon;

function Awake (){
    computedFire = invertRange(fireRate);
    player = GetComponent(Player);
    weapon = GetComponent(Weapon);
    Debug.Log(weapon.primary.name);
}

function Update () {
	if (Input.GetMouseButton(0) && canFirePrimary && fireRate > 0 && player.alive) {
		firePrimary();
	}

	if (Input.GetMouseButtonDown(0) && fireRate == 0 && player.alive){
		firePrimary();
	}
}

function firePrimary() {
	primaryIndex ++;
	canFirePrimary = false;
	
	var position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
	var target = Camera.main.ScreenToWorldPoint(position);
	var playerPos = new Vector2(transform.position.x, transform.position.y);
	var direction = target - playerPos;

	direction.Normalize();
	var newBullet = Instantiate(bullet, transform.position, transform.rotation);
	newBullet.name = primaryIndex.ToString(); 
	newBullet.GetComponent.<Rigidbody2D>().velocity = direction * bulletThrust;
	yield WaitForSeconds(computedFire);
	canFirePrimary = true;
}


function invertRange(val: int) {
	var floor: int = 0;
	var ceil: int = 30;
	var step: float = 0.02F;
	var baseVal: float = ceil - val;
	return baseVal * step;	
}
