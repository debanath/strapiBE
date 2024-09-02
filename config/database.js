const path = require('path');

module.exports = ({ env }) => ({
  connections: {
    client: "postgres",
    connection:{
      host: env("DATABASE_HOST"),
      port: env("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL")
    },
    useNullAsDefault: true
  }
});
