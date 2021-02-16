from crud-backend import db

class Blog(db.Model):
    blog_id = db.Column(db.Integer, primary_key=True)
    blog_title = db.Column(db.String(30), nullable=False)
    blog_content = db.Column(db.text, nullable = False)
    blog_image = db.Column(db.String, nullable=False)

    @property
    def jsonify_data(self):
        return {
            'id': self.blog_id,
            'title': self.blog_title,
            'content': self.blog_content,
            'image': self.blog_image
        }
