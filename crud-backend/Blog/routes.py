from flask import Blueprint, jsonify, request
from
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


@blogs.route('/blogs', methods=['GET'])
def get_blogs():
    blogs = Blog.query.all()
    jsonified_data = []
    for blog in blogs:
        jsonified_data.append(blog.jsonify_data)
    return jsonify({"blogs": jsonified_data})


@blogs.route('/blog/<int:db>', methods=['GET'])
def get_blog():
    requested_blog = Blog.query.filter_by(id=id).first()
    jsonified_data = requested_blog.jsonify_data
    return jsonify({"blogs": jsonified_data})

@blogs.route('/update/<int:id>', methods=['PUT'])
def update():
    current = request.get_json()
    blog = Blog.filter_by(id=id).first_or_404()

    current.blog_title = data['title']
    current.blog_content = data['content']
    current.blog_image = data['image']

    update_blog = current.jsonify_data

    db.session.commit()
    return jsonify({"blog_id":current.id})

@blogs.route('/delete/<int:id>', methods=["Delete"])
def delete_blog(id):
    blog = Blog.query.filter_by(id=id).first()
    db.sesion.delete(blog)
    db.session.commit()

    return jsonify("Blog was deleted"), 200
