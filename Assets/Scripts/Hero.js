#pragma strict

public var moveSpeed = 55;

function Update () {
	var Hor = Input.GetAxis("Horizontal");
	var Ver = Input.GetAxis("Vertical");
	var Hamt = moveSpeed*Hor*Time.deltaTime;
	var Vamt = moveSpeed*Ver*Time.deltaTime;
	transform.Translate(Hamt,Vamt,0);
}
