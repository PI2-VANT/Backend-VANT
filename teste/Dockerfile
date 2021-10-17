FROM mongo:5.0.3
COPY ./mongo.sh /docker-entrypoint-initdb.d/mongo-init.sh
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=password
ENV MONGO_INITDB_DATABASE=db_backend_vant
ENV DB_USER=user
ENV DB_PASS=password
ENV DB_NAME=db_backend_vant
ENV DB_PORT=27017

CMD ["sh","-c", "/docker-entrypoint-initdb.d/mongo-init.sh"]
