# Orders


## Setup
Assumptions:
Postgres DB must be running in foreground or background
Background running:
`brew services start postgresql`

Run Sequelize-cli locally

` /node_modules/.bin sequelize`


Create a development database after Postgres is installed and running

`createdb orders`



## Notes
.sequelizerc -  Sequelize-CLI configuration file: paths for sequelize

Configure database via Sequelize-CLI
./node_modules/.bin sequelize

## Dependencies
* Sequelize - ORM for Postgres DB
* [Sequelize-CLI](https://github.com/sequelize/cli): used to manage models and db via CLI
* Postgres DB
* pg : creating db connection
* pg-hstore: serialize and deserialize JSON data into Postgres hstore data

## API
