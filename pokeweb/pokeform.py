from flask import Flask, send_from_directory, redirect, url_for, request, abort
import csv

## Creating a server
app = Flask(__name__)

@app.route("/api/<name>")
def pokeinfo(name):
    ## Grabbing the info to be displayed from the csv
    file = "pokedex.csv"
    with open(file, "r") as pokedict:
        ## Checking to see if name in search bar is a pokemon  in csv
        for line in csv.DictReader(pokedict):
            if name.lower() == line["name"].lower():
                ## Returning the line that belongs to that specific pokemon
                msg = line
                return msg
    ## Returning a random string if the name is not in the csv
    return "Hello"

@app.route('/ui/<path>')
def show_ui(path):
    ## Sending the ui files to the server ???
    return send_from_directory('../ui', path)

if __name__ == "__main__":
    app.run()
