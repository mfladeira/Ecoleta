<h1 align="center" >Next Level Week #1</h1>

<div align="center"  > <img src="https://user-images.githubusercontent.com/48728541/83947596-5c406300-a7ee-11ea-8f24-1af43117a769.jpeg" /> </div>

<p align="center" style="font-size: 16px">Ecoleta is an application for registering waste collection points such as oil, lamps, batteries, among others. </p>
<p align="center" style="font-size: 16px">The application helps you find the collection point closest to you</p>

<h2>Requirements</h2>

- [Node JS](https://nodejs.org/en/)
- [Expo](https://expo.io)
- [Yarn](https://yarnpkg.com)

<h2>Dependencies</h2>

- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Native](https://reactnative.dev/) - A framework for building native apps using React.
- [Sqlite3](https://github.com/mapbox/node-sqlite3) - Sqlite client for Node.js
- [Knex](https://knexjs.org/) - A SQL Query Builder for Javascript
- [Celebrate](https://www.npmjs.com/package/celebrate) - Express middleware function that wraps the [joi](https://github.com/hapijs/joi/tree/master) validation library
- [Nodemon](https://nodemon.io/) - monitor for any changes in code and automatically restart server
- [Axios](https://github.com/axios/axios) - Promise based HTTP client
- [Jest](https://jestjs.io/) - Testing framework

<h3>Server</h3>

- Installing the dependencies:
```
  yarn install
```

- Migrations
```
  yarn knex:migrate
```

- Seeds
```
  yarn knex:seed
```

- Starting the server

```
  yarn dev
```

<h3>Web</h3>

- Installing the dependencies:

```
  yarn install
```

- Starting the application:

``` 
  yarn start
```

<h3>Mobile</h3>

- Installing the dependenciess:

```
  yarn install
```
- Starting the application:

```
  yarn start
```

<h2>External API</h2>

- <a href="https://servicodados.ibge.gov.br/api/docs/localidades?versao=1" style="font-size: 16px;" >API de Localidade do IBGE</a>
