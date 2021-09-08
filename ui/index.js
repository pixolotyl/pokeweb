
function callback(msg) {
	if (typeof msg === 'string') {
		document.getElementById("pokeinfo").innerHTML = "Sorry, we couldn't find a Pokemon with that name."
	}
	else {
		document.getElementById("pokeinfo").innerHTML = '<table>' + 
														'<tr>' +
														'<th>Name</th>' + 
														'<td>' + 
														msg["name"] +
														'</td>' +
														'</tr>' +
														'<tr>' + 
														'<th>Generation</th>' + 
														'<td>' +
														msg["generation"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Type 1</th>' +
														'<td>' +
														msg["type_1"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Type 2</th>' +
														'<td>' +
														msg["type_2"] +
														'</td>' +
														'</tr>' +
														'<tr>' + 
														'<th>Height (m)</th>' +
														'<td>' +
														msg["height_m"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Weight (kg)</th>' +
														'<td>' +
														msg["weight_kg"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Total Points</th>' +
														'<td>' +
														msg["total_points"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>HP</th>' +
														'<td>' +
														msg["hp"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Attack</th>' +
														'<td>' +
														msg["attack"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Defense</th>' +
														'<td>' +
														msg["defense"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Special Attack</th>' +
														'<td>' +
														msg["sp_attack"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Special Defense</th>' +
														'<td>' +
														msg['sp_defense'] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Speed</th>' +
														'<td>' +
														msg['speed'] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Catch Rate</th>' +
														'<td>' +
														msg['catch_rate'] +
														'</td>' +
														'</tr>' +
														'</table>'
	}
};

var poke = document.getElementById("pokemon");
	poke.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search").click();
    }
});

function revealInfo() {
	var pokemon = document.getElementById("pokemon").value
	$.get("http://127.0.0.1:5000/api/" + pokemon,callback);
};
