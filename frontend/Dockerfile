# base image
FROM node:12.14.1-alpine3.10 as builder

# RUN apk add --no-cache python && \
#     python -m ensurepip && \
#     rm -r /usr/lib/python*/ensurepip && \
#     pip install --upgrade pip setuptools && \
# rm -r /root/.cache

# set working directory
WORKDIR /usr/src/app

# install app dependencies
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock

RUN yarn install

# create build
COPY . /usr/src/app

RUN yarn build

# base image
FROM nginx:1.15.8-alpine

# update nginx conf
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# copy static files
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# expose port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
