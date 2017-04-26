#pragma strict

var moveSpeed: float = 16;
var fireRate: float = 0.5;
var bullet: GameObject;
var bulletThrust: float = 100;
var distance: float = 10.0;

private var nextFire: float = 0.5;
private var newBullet: GameObject;
private var myTime: float = 0.0;

function start() {
	// print("hello");
}

function Update() {
	handleMovement();

	if (Input.GetMouseButton(0)) {
		handlePrimary();
	}

	if (Input.GetMouseButton(1)) {
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
function handlePrimary() {
	print("Primary weapon used");

	nextFire = myTime + fireRate;

	var position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
	var direction = Camera.main.ScreenToWorldPoint(position);
	bullet = Instantiate(bullet, transform.position, transform.rotation);   
	bullet.GetComponent.<Rigidbody2D>().velocity = direction * bulletThrust;
	
	nextFire = nextFire - myTime;
	myTime = 0.0;
}

function handleSecondary() {
	print("Secondary weapon used");
}
