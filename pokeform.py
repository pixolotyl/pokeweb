from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/pokeinfo", methods=['GET'])
def pokeinfo(name):
    return render_template('pokeinfo.html')

if __name__ == "__main__":
    app.run()
