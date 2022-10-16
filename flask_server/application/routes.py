from . import app
from flask import render_template, request, redirect, flash, url_for
from bson import ObjectId
from application import db
from datetime import datetime

@app.route('/', methods=['GET', 'POST'])
def index():
    return 'hello'

# @app.route('/test')
# def get_todos():
#     todos = []
#     for todo in db.testcol.find().sort("date_created", -1):
#         todo["_id"] = str(todo["_id"])
#         todos.append(todo)
#     return render_template('home.html', todos=todos)

@app.route('/test1')
def get_todos():
    todos = []
    for todo in db.testcol.find().sort("date_created", -1):
        todo["_id"] = str(todo["_id"])
        todos.append(todo)
    # return render_template("index.html", todos=todos)
    return render_template('test.html', todos=todos)
