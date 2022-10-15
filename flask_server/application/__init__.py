from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__, template_folder='templates')
app.config['SECRET_KEY']= '71bcff98aa11a953b86aadd0de3a48b6f40a4ea7'
app.config['MONGO_URI'] = 'mongodb+srv://oct2022:oct2022@cluster-instance-oct202.iynj6he.mongodb.net/test1?retryWrites=true&w=majority'

mongodb_client = PyMongo(app)
db = mongodb_client.db

from application import routes