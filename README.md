# Murmuration for MariaDB

Connections, transactions and migrations for MariaDB.

This package is based largely on the following parent one:

* [murmuration](https://github.com/djalbat/murmuration)

This readme file contains a small amount of information specific to this package, however the parent package's readme file is the place to look for how to make use of this package's functionality.

## Installation

You can install Murmuration for MariaDB with [npm](https://www.npmjs.com/):

    npm install murmuration-mariadb

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/murmuration-mariadb.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

General usage instructions are given in the aforementioned parent package's readme file.

```
const murmuration = require("murmuration-mariadb"); ///

const { database, migrate, transaction, Connection } = murmuration,
      { query, execute } = database;

...
```

### Configuration

The `configuration` argument should be a plain old JavaScript object with at least the following properties:

```
{
  host,
  user,
  password,
  database
}
```
The full list of options can be found in the [mysql](https://github.com/mysqljs/mysql) package documentation [here](https://github.com/mysqljs/mysql#connection-options).

As mentioned in the parent package's readme file, if a `log` property is provided on the `configuration` object then the `log.error()` function will be called with a message containing a reasonable stab at the cause of the error. Specifically, the following error codes are mapped to the following messages:

* `ECONNREFUSED` - `'The database isn\'t running, probably.'`

* `ENOTFOUND` - `'The host is wrong, probably.'`

* `ER_BAD_DB_ERROR` - `'The database name is wrong, probably.'`

* `ER_ACCESS_DENIED_ERROR` - `'The username or the password are wrong, probably.'`

* `ETIMEOUT` or `PROTOCOL_SEQUENCE_TIMEOUT` - `'The database server is down, probably.'`

### Placeholders

A variable length list of parameters can be passed between the `sql` and `callback` arguments of both the `query()` and `execute()` functions. These replace the `?` placeholders in the SQL you provide. For example, if the SQL passed to the `query()` function is the following...

```

  SELECT * FROM `user` WHERE `username`=? and `password`=MD5(?);

```
...then you would call the `query()` function thus:

```
const username = ... ,
      password = ... ;

query(connection, sql, username, password, (error, rows) => {

  ...

});

```
The `execute()` function is treated entirely similarly.

For more information on placeholders and performing queries in general, see the `pg` package documentation [here](https://node-postgres.com/features/queries).

## Contact

- james.smith@djalbat.com
- http://djalbat.com
