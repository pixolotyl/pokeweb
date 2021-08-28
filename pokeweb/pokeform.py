from flask import Flask, send_from_directory, redirect, url_for, request, abort

app = Flask(__name__)

@app.route("/api/<name>")
def pokeinfo(name):
    return f"hello {name}!"

@app.route('/ui/<path>')
def show_ui(path):
    """ The UI is stored behind the /ui path.  Doing this, we can protect against path traversal attacks """
    return send_from_directory('../ui', path)

if __name__ == "__main__":
    app.run()
