#pragma strict

var moveSpeed: float = 16;
var fireRate: float = 0.5;
var bullet: GameObject;
var bulletThrust: float = 10;

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
	var position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
	var direction = Camera.main.ScreenToWorldPoint(position);
	bullet = Instantiate(bullet, transform.position, transform.rotation);   
	bullet.GetComponent.<Rigidbody2D>().velocity = direction * bulletThrust;
}

function handleSecondary() {
	print("Secondary weapon used");
}
