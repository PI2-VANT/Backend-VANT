echo "\"${mongo[@]}\" \"$DB_NAME\" <<-EOJS
		db.createUser({
			user: $(_js_escape \"$DB_USER\"),
			pwd: $(_js_escape \"$DB_PASS\"),
			roles: [ { role: 'readWrite' , db: $(_js_escape \"$DB_NAME\") } ]
			})" > /docker-entrypoint-initdb.d/mongo-init.sh

/bin/bash /docker-entrypoint-initdb.d/mongo-init.sh