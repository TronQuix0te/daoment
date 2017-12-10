{
  "name": "daoment",
  "scripts": {
  },
  "env": {
    "APP_KEY": {
      "required": true
    },
    "APP_LOG": {
      "required": true
    },
    "APP_URL": {
      "required": true
    },
    "CLEARDB_DATABASE_URL": {
      "required": true
    },
    "DB_CONNECTION": {
      "required": true
    },
    "DB_DATABASE": {
      "required": true
    },
    "DB_HOST": {
      "required": true
    },
    "DB_PASSWORD": {
      "required": true
    },
    "DB_PORT": {
      "required": true
    },
    "DB_USERNAME": {
      "required": true
    }
  },
  "formation": {
  },
  "addons": [
    "cleardb",
    "scheduler"
  ],
  "buildpacks": [
    {
      "url": "heroku/php"
    }
  ]
}
