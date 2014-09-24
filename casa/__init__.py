from flask import Flask
from flask.ext.restful import Api

app = Flask(
    __name__,
    static_folder = 'public',
    template_folder = 'public'
)

api = Api(app)

from controllers import main