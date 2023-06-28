### Drones

### Introduction

There is a major new technology that is destined to be a disruptive force in the field of
transportation: **the drone**. Just as the mobile phone allowed developing countries to leapfrog
older technologies for personal communication, the drone has the potential to leapfrog
traditional transportation infrastructure.
Useful drone functions include delivery of small items that are (urgently) needed in locations
with difficult access.

[Postman-Documentation]()

### Technology Used

- [Node.js](https://nodejs.org/) - Server Side
- [Express.js](https://expressjs.com/) for routing
- [MongoDB](https://www.cloud.mongodb.com/) for database
- [Heroku](https://www.heroku.com/) for deployment and hosting
- [Docker](https://docs.docker.com/)
- [Redis](https://www.heroku.com/) for deployment and hosting

### How to run locally

```bash
npm install
npm run dev
```

### User Authentication API Reference

#### register

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "fullname": "
    "email": "
    "password": "
    }' \
    https://
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `fullname`     | `string` | **Required**. fullname is required     |
| `email`    | `string` | **Required**. email is required    |
| `password` | `string` | **Required**. password is required |

### User Dashboard Reference

#### Post a Question

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "
  "body": "
  "tags": "
  "user_id": "
  }' \
    https:
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`    | `string` | **Required**. title is required    |
| `body`  | `string` | **Required**. body is required  |
| `tags` | `string` | **Required**. tags is required |
| `user_id` | `string` | **Required**. user_id is required |

#### Answer a question

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "answer": "
  "questionPostId": "
  "user_id": "
  }' \
    https:
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `answer`    | `string` | **Required**. answer is required    |
| `questionPostId` | `string` | **Required**. questionPostId is required |
| `user_id` | `string` | **Required**. user_id is required |

Copyright (c) 2022 Victoria
