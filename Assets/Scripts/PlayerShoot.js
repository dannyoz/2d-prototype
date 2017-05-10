#pragma strict

public var bullet: GameObject;

@Range(0, 100)
public var bulletThrust: float = 85;

private var primaryIndex : int = 0;
private var canFirePrimary : boolean = true;
private var reloading: boolean = false;
private var computedFire : float;
private var player : Player;
private var weapon : Weapon;
private var fireRate : int;
private var clipSize: int;

function Start(){
    player = GetComponent(Player);
    weapon = GetComponent(Weapon);
    clipSize = weapon.primary.clipSize;
    fireRate = weapon.primary.fireRate;
    computedFire = invertRange(fireRate);
}

function Update() {

    // Automatic weapon
	if (Input.GetMouseButton(0) && automatic()) {
		firePrimary();
	}

    // Semi auto
	if (Input.GetMouseButtonDown(0) && singleShot()){
		firePrimary();
	}
}

function firePrimary() {
	primaryIndex ++;
    clipSize --;
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

    if(clipSize == 0){
        reload();
    } 
}

function reload() {
    reloading = true;
    yield WaitForSeconds(weapon.primary.reload);
    reloading = false;
    clipSize = weapon.primary.clipSize;
}

function automatic() {
    return canFirePrimary && fireRate > 0 && player.alive && !reloading && clipSize > 0;
}

function singleShot() {
    return fireRate == 0 && player.alive;
}

function invertRange(val: int) {
	var floor: int = 0;
	var ceil: int = 30;
	var step: float = 0.02F;
	var baseVal: float = ceil - val;
	return baseVal * step;	
}
