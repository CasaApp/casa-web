from flask import render_template, request, flash, redirect, url_for, g

from flask.ext.restful import reqparse, abort, Api, Resource

from casa import app

api = Api(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def main(path):
    return app.send_static_file('index.html')