from flask import Flask, send_from_directory, redirect, url_for, request, abort

app = Flask(__name__)

@app.route("/<path>")
def pokeinfo(path):
    return send_from_directory("templates", path)

if __name__ == "__main__":
    app.run()
