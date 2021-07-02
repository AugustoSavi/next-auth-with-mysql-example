# NextAuth.js with Mysql Example

## About this project

This is an example of how to use [NextAuth.js](https://next-auth.js.org) library to add authentication to a [Next.js](https://nextjs.org) application.

## Getting started

### 1. Clone the repository and install dependancies

```
git clone https://github.com/nextauthjs/next-auth-example.git
cd next-auth-example
npm i
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```
Set each variable on `.env.local`:

- `MYSQL_HOST` - Your MySQL host URL.
- `MYSQL_DATABASE` - The name of the MySQL database you want to use.
- `MYSQL_USERNAME` - The name of the MySQL user with access to database.
- `MYSQL_PASSWORD` - The passowrd of the MySQL user.

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database configuration

A database is needed to persist user accounts and to support email sign in, but you can still use NextAuth.js for authentication without one by using OAuth for authentication. If you do not specify a database, JSON Web Tokens will be enabled by default.

You can skip configuring a database and come back to it later if you want.

When configuring your database you should also install an appropriate node_module.

* **MySQL**

  Install module:
  `npm i mysql2`

  Database URI:
  `mysql://username:password@127.0.0.1:3306/database_name?synchronize=true`


Notes:

* The example .env specifies an in-memory SQLite database that does not persist data.
* SQLite is suitable for development / testing but not for production.
* The option `?synchronize=true` automatically syncs schema changes to the database. It should not be used in production as may result in data loss if there are changes to the schema or to NextAuth.js
* You can also specify a [TypeORM connection object](https://typeorm.io/#/connection-options) in `pages/api/auth/[...nextauth].js` instead of a database URL / connection string.

### 3. Configure authentication providers

* Review and update options in `pages/api/auth/[...nextauth].js` as needed.

* When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

  e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

  A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers

* You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Run migration script

You'll need to run a migration to create the necessary table for the example.

```bash
npm run migrate
# or
yarn migrate
```

### 5. Start the application

To run your site locally, use:

```
npm run dev
```

To run it it production mode, use:

```
npm build
npm start
```

### 6. Configuring for production

You must set the NEXTAUTH_URL environment variable with the URL of your site, before deploying to production.

e.g. `NEXTAUTH_URL=https://example.com`

To do this in on Vercel, you can use the [Vercel project dashboard](https://vercel.com/dashboard) or the `vc env` command:

    vc env add NEXTAUTH_URL production

Be sure to also set environment variables for the Client ID and Client Secret values for all your authentication providers.

### 7. Images

![home1](https://user-images.githubusercontent.com/32443720/124319812-356b7200-db51-11eb-8e36-f81281b496b9.png)

![home-2](https://user-images.githubusercontent.com/32443720/124319815-36040880-db51-11eb-901f-2ae44d85c246.png)

![projects-1](https://user-images.githubusercontent.com/32443720/124319817-369c9f00-db51-11eb-8384-4c326091b925.png)

![projects-2](https://user-images.githubusercontent.com/32443720/124319819-369c9f00-db51-11eb-858f-8e09ea97f6e8.png)

![relatorios-1](https://user-images.githubusercontent.com/32443720/124319830-37cdcc00-db51-11eb-9000-cb8c62caa06f.png)

![relatorios-2](https://user-images.githubusercontent.com/32443720/124319832-38666280-db51-11eb-8eed-1e25bc8936ab.png)