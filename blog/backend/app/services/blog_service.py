from app.models.blog import Blog
from app.services.sql_service import SQLService
from app import db
from flask import jsonify


class BlogService(SQLService):
    model = Blog
    db = db

    def __init__(self):
        SQLService.__init__(self, self.db, self.model)

    def update(self, id, title, desc):
        to_update = self.model.query.get(id)
        if title:
            to_update.title = title
        if desc:
            to_update.description = desc
        self.db.session.commit()
        # to_update = to_update.serialize()
        return jsonify(to_update.serialize)
