#pragma strict

public var moveSpeed = 55;

function Update () {
	var X = Input.GetAxis("Horizontal");
	var Y = Input.GetAxis("Vertical");
	var Xamt = moveSpeed*X*Time.deltaTime;
	var Yamt = moveSpeed*Y*Time.deltaTime;
	transform.Translate(Xamt,Yamt,0);
}
