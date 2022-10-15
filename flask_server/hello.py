from flask import Flask, render_template
app = Flask(__name__,template_folder='static')

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/flask")
def get_user():
    return "<p>Hello, World from flask!</p>"

@app.route("/fl")
def post_user():
    return "<p>Hello, World from flaskcew!</p>"