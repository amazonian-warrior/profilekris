function clicker() {
	alert("Hello all!");
};



function add() {
	var num1 = parseInt(document.getElementById("list1").value);
	console.log("num1: " + num1);
	var num2 = parseInt(document.getElementById("list2").value);
	console.log("num2: " + num2);
	var answer = num1 + num2;
	console.log("answer: " + answer);
	alert(answer);
}

