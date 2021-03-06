from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api
from setting import config
from app.celery import generate_celery
CELERY_ENV = 'celery'

db = SQLAlchemy()
migrate = Migrate()
api = Api()
celery = generate_celery()


def create_app(env='development'):
    # moving all configuration to separate file, inspired from git hub repositories.
    app_setting = config[env]

    app = Flask(__name__)
    app.config.from_object(app_setting)

    CORS(app, origins='*')

    db.init_app(app)
    from app.models.blog import Blog

    with app.app_context():
        db.create_all()
        db.session.commit()

    migrate.init_app(app, db)
    from app.celery import init_celery
    init_celery(celery, app)

    if env != CELERY_ENV:
        from app.views import views
        views.register_view(api)
        api.init_app(app)

    return app
