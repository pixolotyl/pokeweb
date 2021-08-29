
function callback(msg) {
	var pokeinfo = JSON.stringify(msg)
	document.getElementById("pokeinfo").innerHTML = pokeinfo
}

function revealInfo() {
	var pokemon = document.getElementById("pokemon").value
	$.get("http://127.0.0.1:5000/api/" + pokemon,callback);
}

