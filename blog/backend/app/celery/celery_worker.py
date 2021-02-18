from app import celery, create_app
from app.models.blog import Blog
from app.views.views import blog_service
from flask_cors import CORS
import time
# https://github.com/1xch/flask-celery-example/blob/master/app.py inspired from the example


@celery.task()
def celery_blogs(count):
    time.sleep(5)

    blog_service.save(Blog("valar dohaeris from celery ", "If you set your goals ridiculously high and \
                        it's a failure, you will fail above everyone else's success."))
    return "Blog Created! Task Complete"


app = create_app(env='celery')
CORS(app, origins='*')

