
# we can use lighter version of python FROM python:alpine3.7
FROM python:3.7

ENV PYTHONUNBUFFERED 1

RUN mkdir -p /backend

# Update working directory
WORKDIR /backend

# copy everything from this directory to server docker container
COPY . /backend

# Install the Python libraries from requirements
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000
# Entry point
CMD FLASK_APP=/backend/run.py flask run --host 0.0.0.0
