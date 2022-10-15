from flask import Flask, render_template


app = Flask(__name__,template_folder='templates')

client = MongoClient('mongodb+srv://oct2022:oct2022Password@123@cluster-instance-oct202.iynj6he.mongodb.net/test?retryWrites=true&w=majority', 27017)

db = client.flask_db
testcol = db.testcol

@app.route('/', methods=('GET', 'POST'))
def home():
    if request.method=='POST':
        content = request.form['content']
        degree = request.form['degree']
        testcol.insert_one({'content': content, 'degree': degree})
        return redirect(url_for('index'))

    all_todos = testcol.find()
    return render_template('home.html', testcol=all_todos)

@app.route("/about")
def get_user():
    return render_template("about.html")

@app.route("/contact")
def post_user():
    return render_template("contact.html")