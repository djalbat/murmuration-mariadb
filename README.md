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
const murmuration = require('murmuration-mariadb'), ///
      { database, migrate, transaction, Connection } = murmuration,
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

* `ER_PARSE_ERROR` or `ER_BAD_TABLE_ERROR` - In these cases the error code is simply echoed and the offending SQL, if there is any, will be echoed in a separate call to the `log.error()` function.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
