#pragma strict

public var moveSpeed = 55;

function start() {
	// print("hello");
}

function handleMovement() {
	var Hor = Input.GetAxis("Horizontal");
	var Ver = Input.GetAxis("Vertical");
	var Hamt = moveSpeed*Hor*Time.deltaTime;
	var Vamt = moveSpeed*Ver*Time.deltaTime;
	transform.Translate(Hamt,Vamt,0);
}

function handlePrimary() {
	if(Input.GetMouseButton(0)){
		print("primary weapon used");
	}
}

function handleSecondary() {
	if(Input.GetMouseButton(1)){
		print("Secondary weapon used");
	}
}

function Update() {
	handleMovement();
	handlePrimary();
	handleSecondary();
}
