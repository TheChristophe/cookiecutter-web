"""This module implements the loading of multiple flask extensions to
extend the basic provided functionality to the API requirements.
For more information about flask and extensions see:

https://flask.palletsprojects.com/en/2.0.x/extensions

Each extension requires of a specific class initialization which is
lately initialized in the application factory using the settings and
configurations from the environment.
"""
from flask_smorest import Api
from flaat.flask import Flaat

#: Flask framework library for creating REST APIs (i.e. OpenAPI)
api = Api()

#: Flask extension that provides support for handling oidc Access Tokens
flaat = Flaat()
