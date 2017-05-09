#pragma strict

public var moveSpeed: float = 5;
private var player : Player;

function Awake (){
    player = GetComponent(Player);
}

function Update () {
	if (player.alive) {
		handleMovement();
	}
}

function handleMovement() {
	var Hor = Input.GetAxis("Horizontal");
	var Ver = Input.GetAxis("Vertical");
	var Hamt = moveSpeed * Hor * Time.deltaTime;
	var Vamt = moveSpeed * Ver * Time.deltaTime;
	
	transform.Translate(Hamt, Vamt, 0);
}
