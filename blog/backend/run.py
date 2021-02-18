from app import create_app

app = create_app()  # App initialization


@app.route('/api')
def hello():
    return "Hello please navigate to localhost/home"

if __name__ == '__main__':
    app.run()
