﻿#pragma strict

public var bullet: GameObject;

@Range(0, 100)
public var bulletThrust: float = 85;

private var primaryIndex : int = 0;
private var canFirePrimary : boolean = true;
private var reloading: boolean = false;
private var player : Player;
private var weapon : Weapon;

// TODO: this may need to be re-instantiated on weapon switch
private var clipCount: int;
private var clipSize: int;

function Start(){
    player = GetComponent(Player);
    weapon = GetComponent(Weapon);
    clipCount = weapon.primary.clipCount;
    clipSize = weapon.primary.clipSize;
}

function Update() {

    // Automatic player
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
	
    // Directional vars
	var position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
	var target = Camera.main.ScreenToWorldPoint(position);
	var playerPos = new Vector2(transform.position.x, transform.position.y);
	var direction = target - playerPos;

    // Weapon vars
    var fireRate = weapon.primary.fireRate;
    var computedFire = invertRange(fireRate);

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
    clipCount --;
    if(clipCount > 0) {
        yield WaitForSeconds(weapon.primary.reload);
        reloading = false;
        clipSize = weapon.primary.clipSize;
    }
}

function automatic() {
    var fireRate: int = weapon.primary.fireRate;
    var clipSize: int = weapon.primary.clipSize;
    return canFirePrimary && fireRate > 0 && player.alive && !reloading && clipSize > 0;
}

function singleShot() {
    var fireRate: int = weapon.primary.fireRate;
    var clipSize: int = weapon.primary.clipSize;
    return fireRate == 0 && player.alive && !reloading && clipSize > 0;
}

function invertRange(val: int) {
	var floor: int = 0;
	var ceil: int = 30;
	var step: float = 0.02F;
	var baseVal: float = ceil - val;
	return baseVal * step;	
}
