### Drones

### Introduction

There is a major new technology that is destined to be a disruptive force in the field of
transportation: **the drone**. Just as the mobile phone allowed developing countries to leapfrog
older technologies for personal communication, the drone has the potential to leapfrog
traditional transportation infrastructure.
Useful drone functions include delivery of small items that are (urgently) needed in locations
with difficult access.

### Technology Used

- [Node.js](https://nodejs.org/) - Server Side
- [Express.js](https://expressjs.com/) for routing
- [MongoDB](https://www.cloud.mongodb.com/) for database
- [Render](https://dashboard.render.com/) for deployment and hosting


### How to run locally

```bash
npm install
npm run dev
```

### Drone Registration API Reference

#### register a drone

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "number": "
    "model": "
    "weight": "
    "battery": "
    "state": "
    }' \
   
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `number`     | `string` | **Required**. number is required     |
| `model`    | `string` | **Required**. model is required    |
| `weight` | `string` | **Required**. weight is required |
| `battery`    | `string` | **Required**. battery is required    |
| `state` | `string` | **Required**. state is required |

#### Add Medications

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "
  "weight": "
  "code": "
  "photo": "
  }' \
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**. name is required    |
| `weight`  | `string` | **Required**. weight is required  |
| `code` | `string` | **Required**. code is required |
| `photo` | `string` | **Required**. photo is required |

#### Get Medications for a particular drone

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "droneId": "
  }' \
    https:
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `droneId` | `string` | **Required**. droneId is required |

Copyright (c) 2023 Victoria
