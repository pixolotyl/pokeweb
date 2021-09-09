function callback(msg) {
	// Function to format and display pokemon info from python file
	// If typo/not a valid pokemon, the python file returns a string
	if (typeof msg === 'string') {
		document.getElementById("pokeinfo").innerHTML = "Sorry, we couldn't find a Pokemon with that name."
	}
	// If a valid pokemon name, it returns an object
	else {
		// There's probably a much better way to do this
		document.getElementById("pokeinfo").innerHTML = '<table>' + 
														'<tr>' +
														'<th>Name</th>' + 
														'<td>' + 
														msg["name"] +
														'</td>' +
														'<th>HP</th>' +
														'<td>' +
														msg["hp"] +
														'</td>' +
														'</tr>' +
														'<tr>' + 
														'<th>Generation</th>' + 
														'<td>' +
														msg["generation"] +
														'</td>' +
														'<th>Attack</th>' +
														'<td>' +
														msg["attack"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Type 1</th>' +
														'<td>' +
														msg["type_1"] +
														'</td>' +
														'<th>Defense</th>' +
														'<td>' +
														msg["defense"] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Type 2</th>' +
														'<td>' +
														msg["type_2"] +
														'</td>' +
														'<th>Special Attack</th>' +
														'<td>' +
														msg["sp_attack"] +
														'</td>' +
														'</tr>' +
														'<tr>' + 
														'<th>Height (m)</th>' +
														'<td>' +
														msg["height_m"] +
														'</td>' +
														'<th>Special Defense</th>' +
														'<td>' +
														msg['sp_defense'] +
														'</td>' +
														'</tr>' +
														'<tr>' +
														'<th>Weight (kg)</th>' +
														'<td>' +
														msg["weight_kg"] +
														'</td>' +
														'<th>Speed</th>' +
														'<td>' +
														msg['speed'] +
														'</td>' +
														'</tr>' +
														"<tr>" +
														'<th>Catch Rate</th>' +
														'<td>' +
														msg['catch_rate'] +
														'</td>' +
														'<th>Total Points</th>' +
														'<td>' +
														msg["total_points"] +
														'</td>' + 
														'</tr>' +
														'</table>'
	}
};


// To get the return key to search as well
var poke = document.getElementById("pokemon");
	poke.addEventListener("keyup", function(event) {
    event.preventDefault();
    // Return key is 13
    if (event.keyCode === 13) {
        document.getElementById("search").click();
    }
});

function revealInfo() {
	// Communicating through the API ??? to trigger the python pokeinfo function
	var pokemon = document.getElementById("pokemon").value
	$.get("http://127.0.0.1:5000/api/" + pokemon,callback);
};
