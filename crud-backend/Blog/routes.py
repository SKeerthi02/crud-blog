from flask import Blueprint
from crud-backend import db

blogs= Blueprint('blogs', __name__)

@blogs.route('/add_blog', methods=["POST"])
def create_blog():
    data = request.get_json()

    new_blog = Blog(blog_title=data["title"], blog_content=data["content"], blog_image=data["image"])

    db.session.add(new_blog)
    db.session.commit()

    blog_id = getattr(new_blog, "id")
    return jsonify({"id": blog_id})