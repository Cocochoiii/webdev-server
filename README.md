# webdev-server

CS5610 Web Development - the Node.js and Express HTTP server for Kambaz

Coco Choi · Section 09

This is the server half of my project. The Next.js client is in a sibling
repository, [webdev-client](https://github.com/Cocochoiii/webdev-client).

- `main` branch — first version of the server
- `a5` branch — Assignment 5 (Chapter 5: RESTful web APIs with Express)
- `a6` branch — Assignment 6 (Chapter 6: the data moves into MongoDB with Mongoose)

## What is in here

- `index.ts` — connects to MongoDB, makes the express app, turns on cors, sessions, and JSON, and loads every route file
- `Hello.ts` — the `/hello` and `/` greetings
- `Lab5/` — the lab 5 routes: path parameters, query parameters, a remote object, and a remote array of todos
- `Lab6/` — the lab 6 routes: the database connection status and a todos collection with every CRUD call
- `Kambaz/Database/` — the JSON files I import into the `kambaz` database with Compass
- `Kambaz/Users`, `Courses`, `Modules`, `Assignments`, `Enrollments` — a `schema.ts` that describes the documents, a `model.ts` that talks to the collection, a `dao.ts` that wraps the model calls, and a `routes.ts` that maps the URLs

## Routes

| Method and URL | What it does |
| --- | --- |
| `GET /` and `GET /hello` | greetings |
| `GET /lab5/welcome` | lab 5 greeting |
| `GET /lab5/add/:a/:b` (also subtract, multiply, divide) | math with path parameters |
| `GET /lab5/calculator?operation=add&a=1&b=2` | math with query parameters |
| `GET /lab5/assignment`, `GET /lab5/module` | the remote objects and their title, name, score, completed, and description routes |
| `GET /lab5/todos` and the create, delete, title, completed, description routes | the remote array with GET |
| `POST PUT DELETE /lab5/todos` | the same array with the right HTTP methods |
| `GET /lab6/status` | whether Mongoose is connected |
| `GET POST /lab6/todos`, `GET PUT DELETE /lab6/todos/:id`, `GET /lab6/todos?completed=true` | the lab 6 todos collection |
| `POST /api/users/signin` `signup` `signout`, `GET /api/users/profile` | account, remembered in the session |
| `GET /api/users`, `GET /api/users?role=FACULTY`, `GET /api/users?name=thor`, `GET POST PUT DELETE` by `/api/users/:userId` | the admin Users screen |
| `GET POST /api/courses`, `GET PUT DELETE /api/courses/:courseId`, `GET /api/users/:userId/courses` | courses |
| `GET POST /api/courses/:courseId/modules`, `PUT DELETE /api/modules/:moduleId` | modules |
| `GET POST /api/courses/:courseId/assignments`, `PUT DELETE /api/assignments/:assignmentId` | assignments |
| `POST DELETE /api/users/:uid/courses/:cid`, `GET /api/courses/:cid/users` | enroll, unenroll, and the people in a course |

The data lives in the `kambaz` MongoDB database, so it survives a restart.
Modules, assignments, and enrollments each keep a `course` or `user` id that
points at the document they belong to.

## Running it

```
npm install
npm run dev
```

MongoDB has to be running first. Locally I start it with
`mongod --dbpath ~/data` and import the five JSON files from `Kambaz/Database`
into a database called `kambaz` with Compass. The server listens on
http://localhost:4000. It needs a `.env` file with the keys in `.env.example`:
`SERVER_ENV`, `CLIENT_URL`, `SERVER_URL`, `SESSION_SECRET`, and
`DATABASE_CONNECTION_STRING`.

## Deploying

I deploy this repository on Render as a web service, one service per
assignment branch so the older one keeps working. Build command is
`npm install` and start command is `npm start`. The same five environment
variables are set in Render with the production values, and
`DATABASE_CONNECTION_STRING` points at my MongoDB Atlas cluster with `kambaz`
in the path.
