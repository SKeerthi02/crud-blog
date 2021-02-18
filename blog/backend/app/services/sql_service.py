from flask import jsonify
import json


class SQLService:

    def __init__(self, db, model):
        self.db = db
        self.model = model

    def all(self):
        data = self.model.query.all()
        data = [row.serialize for row in data]
        return jsonify(data)

    def get(self, id):
        data = self.model.query.get(id)
        return jsonify(data.serialize)

    def get_all(self, *ids):
        return self.model.query.filter(self.model.id.in_(ids)).all()

    def save(self, obj):
        self.db.session.add(obj)
        self.db.session.commit()
        return 1

    def delete(self, id):
        to_delete = self.model.query.get(id)
        self.db.session.delete(to_delete)
        self.db.session.commit()
        return jsonify(to_delete.serialize)
