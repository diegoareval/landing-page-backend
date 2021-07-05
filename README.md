# multi-tenant-node-app
it is a way to connect a single project with different databases, to have so many clients in a single project
## What is this?

This is a proof-of-concept (POC), multi-tenant [RESTful Web Services](https://restfulapi.net/) application built on top of [NodeJS](https://nodejs.org/en/).

## Get Started

* Install dependencies.
```
npm install
```
* Verify the Database configuration in `config/config.json` and put your own credentials.
* Run migrations on the main database.
```
npx sequelize-cli db:migrate
```
* Start the application.
```
npm start
```
* Perform API requests.

## APIs

### HTTP Headers

* For APIs other than `Signup` and `Authentication`, pass the `JWT Token` in the `Authorization` header of the request.

```
Authorization: Bearer <JWT Token>
```

### Signup

* POST `/api/v1/accounts/signup`

```
{
  "name": "Alphabet",
  "domain": "alphabet.com",
  "firstName": "Diego",
  "lastName": "Arevalo",
  "email": "diego2000avelar@gmail.com",
  "password": "123456",
  "address": "your address"
}
```

### Authentication

* POST `/api/v1/auth/login`

```
{
  "email": "diego2000avelar@gmail.com",
  "password": "123456"
}
```

### Organizations

* GET `/api/v1/organizations`

* GET `/api/v1/organizations/:organizationId`

* POST `/api/v1/organizations`

```
{
  "name": "Google",
  "domain": "google.com"
}
```

* DELETE `/api/v1/organizations/:organizationId`

### Users

* GET `/api/v1/users`

* GET `/api/v1/users/:userId`

* POST `/api/v1/users`

```
{
  "firstName": "devs",
  "lastName": "soft",
  "email": "johndoe@gmail.com",
  "password": "123456"
}
```

* DELETE `/api/v1/users/:userId`

## Libraries

* Core - [Express](https://www.npmjs.com/package/express) + [Body Parser](https://www.npmjs.com/package/body-parser)
* ORM - [Sequelize](https://www.npmjs.com/package/sequelize) + [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli)
* Databases - [Postgress](https://www.npmjs.com/package/pg) + [SQLite3](https://www.npmjs.com/package/sqlite3)
* Logger - [Winston](https://www.npmjs.com/package/winston) + [Morgan](https://www.npmjs.com/package/morgan)
* Monitoring - [Nodemon](https://www.npmjs.com/package/nodemon)
* Authentication - [Passport](https://www.npmjs.com/package/passport) + [JWT](https://www.npmjs.com/package/passport-jwt)
