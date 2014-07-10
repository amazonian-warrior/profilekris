function clicker() {
	alert("Hello all!");
};



function add() {
	var num1 = parseInt(document.getElementById("list1").value);
	var num2 = parseInt(document.getElementById("list2").value);
	var answer = num1 + num2;
	alert(answer);
}

function multiply (){
	var x = parseInt(document.getElementById("list1").value);
	var y = parseInt(document.getElementById("list2").value);
	var answer = x * y;
	alert(answer);
}

function divide () {
	var x = parseInt(document.getElementById("list1").value);
	var y = parseInt(document.getElementById("list2").value);
	var answer = x / y;
	alert(answer);

}

function exponential (){
	var x = parseInt(document.getElementById("list1").value);
	var y = parseInt(document.getElementById("list2").value);
	var answer = 1;
	for (var i = 0; i < y; i++) {
		answer = answer * x;
	}
	alert(answer);

}

function forLoopExample() {
	var i = 0;
	for(i=0; i<5; i++) {
		console.log('hi');
	}
}
// alert(answer);

	// var answer = Math.pow(x, y);

// 2 2 2 

// 2 to the 3 