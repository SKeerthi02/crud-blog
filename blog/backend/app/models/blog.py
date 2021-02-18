from app import db
from datetime import datetime
from sqlalchemy import inspect


class Blog(db.Model):
    __tablename__ = "blogs"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(500), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_date = db.Column(db.DateTime, nullable=False, )

    def __init__(self, title, description):
        self.title = title
        self.description = description
        self.created_date = datetime.now()

    @property
    def serialize(self):
        return {
            'title': self.title,
            'description': self.description,
            'created_date': self.created_date,
            'id': self.id,
        }
