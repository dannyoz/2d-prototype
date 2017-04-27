#pragma strict

var moveSpeed: float = 16;
var fireRate: float = 0.5;
var bullet: GameObject;
var bulletThrust: float = 10;

function Update() {
	handleMovement();

	if (Input.GetMouseButtonDown(0)) {
		handlePrimary();
	}

	if (Input.GetMouseButtonDown(1)) {
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
	var position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
	var target = Camera.main.ScreenToWorldPoint(position);
	var playerPos = new Vector2(transform.position.x, transform.position.y);
	var direction = target - playerPos;
	direction.Normalize();
	bullet = Instantiate(bullet, transform.position, transform.rotation);   
	bullet.GetComponent.<Rigidbody2D>().velocity = direction * bulletThrust;
}

function handleSecondary() {
	print("Secondary weapon used");
}
