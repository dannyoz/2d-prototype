﻿#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnCollisionEnter (col : Collision) {
    print("bullet hit");
    Destroy(col.gameObject);
}