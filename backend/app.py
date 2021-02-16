from flask import Flask, url_for, render_template, jsonify, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from crud-backend.Blog.routes import blogs

app = Flask(__name__)
CORS(app)
app.register_blueprint(blogs)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:mysecretpassword@testdb:5432/keerthi'
db = SQLAlchemy(app)

@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()