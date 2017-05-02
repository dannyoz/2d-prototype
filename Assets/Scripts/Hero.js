#pragma strict

var moveSpeed: float = 16;
var bullet: GameObject;
var UImessage: GameObject;
var bulletThrust: float = 85;
var health: int = 100;

@Range(0, 30)
var fireRate: int = 15;

private var primaryIndex : int = 0;
private var canFirePrimary : boolean = true;
private var computedFire : float;
private var alive : boolean = true;

function Start() {
	computedFire = invertRange(fireRate);
}

function Update() {

	if (alive) {
		handleMovement();
	}

	if (Input.GetMouseButton(0) && canFirePrimary && fireRate > 0 && alive) {
		firePrimary();
	}

	if (Input.GetMouseButtonDown(0) && fireRate == 0 && alive){
		firePrimary();
	}

	if (Input.GetMouseButtonDown(1) && alive) {
		handleSecondary();
	}
}

// Moves the player
function handleMovement() {
	var Hor = Input.GetAxis("Horizontal");
	var Ver = Input.GetAxis("Vertical");
	var Hamt = moveSpeed * Hor * Time.deltaTime;
	var Vamt = moveSpeed * Ver * Time.deltaTime;
	
	transform.Translate(Hamt, Vamt, 0);
}

// Shoot primary weapon
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

function handleSecondary() {
	print("Secondary weapon used");
}


function invertRange(val: int) {
	var floor: int = 0;
	var ceil: int = 30;
	var step: float = 0.02F;
	var baseVal: float = ceil - val;
	return baseVal * step;	
}

// Bitten by enemy
function OnTriggerEnter2D(col: Collider2D) {
	if(col.gameObject.tag == "Enemy") {
		health -= 10;
		print(health);
		if (health < 0) {
			alive = false;
			var message = Instantiate(UImessage, transform.position, transform.rotation);
			message.GetComponent(UImessages).endGame("test");
		}
	}
}
