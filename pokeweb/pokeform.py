from flask import Flask, send_from_directory, redirect, url_for, request, abort
import csv
import json

## Creating a server
app = Flask(__name__)

@app.route("/api/<name>")
def pokeinfo(name):
    ## Grabbing the info to be displayed from the csv
    file = "pokedex.csv"
    with open(file, "r") as pokedict:
        for line in csv.DictReader(pokedict):
            if name.lower() == line["name"].lower():
                msg = json.dumps(line)
                return msg
    return f"Sorry, could not find a Pokemon named {name}"

@app.route('/ui/<path>')
def show_ui(path):
    return send_from_directory('../ui', path)

if __name__ == "__main__":
    app.run()
