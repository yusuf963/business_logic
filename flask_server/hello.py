from flask import Flask, render_template
app = Flask(__name__,template_folder='templates')

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def get_user():
    return render_template("about.html")

@app.route("/contact")
def post_user():
    return render_template("contact.html")