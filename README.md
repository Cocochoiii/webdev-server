# webdev-server

CS5610 Web Development - the Node.js and Express HTTP server for Kambaz

Coco Choi · Section 09

This is the server half of my project. The Next.js client is in a sibling
repository, [webdev-client](https://github.com/Cocochoiii/webdev-client).

- `main` branch — first version of the server
- `a5` branch — Assignment 5 (Chapter 5: RESTful web APIs with Express)

## What is in here

- `index.ts` — makes the express app, turns on cors, sessions, and JSON, and loads every route file
- `Hello.ts` — the `/hello` and `/` greetings
- `Lab5/` — the lab 5 routes: path parameters, query parameters, a remote object, and a remote array of todos
- `Kambaz/Database/` — the JSON files copied from the client, put together in `index.ts`
- `Kambaz/Users`, `Courses`, `Modules`, `Assignments`, `Enrollments` — one `dao.ts` that touches the data and one `routes.ts` that maps the URLs

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
| `POST /api/users/signin` `signup` `signout` `profile`, `PUT /api/users/:userId` | account, remembered in the session |
| `GET /api/courses`, `GET /api/users/:userId/courses`, `POST /api/users/current/courses`, `PUT DELETE /api/courses/:courseId` | courses |
| `GET POST /api/courses/:courseId/modules`, `PUT DELETE /api/modules/:moduleId` | modules |
| `GET POST /api/courses/:courseId/assignments`, `PUT DELETE /api/assignments/:assignmentId` | assignments |
| `POST DELETE /api/users/:userId/courses/:courseId` | enroll and unenroll |
| `GET /api/courses/:courseId/users`, `POST /api/users` | the people table |

The data only lives in memory, so a restart brings back the JSON files.

## Running it

```
npm install
npm run dev
```

The server listens on http://localhost:4000. It needs a `.env` file with
`SERVER_ENV`, `CLIENT_URL`, `SERVER_URL`, and `SESSION_SECRET`.

## Deploying

I deploy this repository on Render as a web service. Build command is
`npm install` and start command is `npm start`. The same four environment
variables are set in Render with the production values.
