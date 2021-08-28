function callback(msg) {
	alert(msg)
}

function revealInfo() {
	var pokemon = document.getElementById("pokemon").value
	$.get("http://127.0.0.1:5000/api/" + pokemon,callback);
}

