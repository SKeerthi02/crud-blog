from celery import Celery


def generate_celery(app_name=__name__):
    return Celery(app_name, broker='redis://localhost:6379/0')


def init_celery(celery, app):
    celery.conf.update(app.config)
    task = celery.Task

    class ContextTask(task):
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return task.__call__(self, *args, **kwargs)

    celery.Task = ContextTask
