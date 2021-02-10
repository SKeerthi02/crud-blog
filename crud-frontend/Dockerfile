FROM node:14.15
# set working directory
WORKDIR /crud-frontend
# add `/app/node_modules/.bin` to $PATH
# ENV PATH /frontEnd/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /crud-frontend/package.json
RUN npm install
RUN npm install -g @angular/cli@8.3.29
# add app
COPY . /crud-frontend
# start app
CMD ng serve --host 0.0.0.0 --disable-host-check
