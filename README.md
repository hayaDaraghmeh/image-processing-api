# Image Processing API

This project is part of the **Full Stack JavaScript Developer Nanodegree** at Udacity.

The goal of this project is to build a simple REST API that can resize images using query parameters. The API processes images stored locally and returns a resized version of the requested image.

---

## Project Description

This API allows users to request resized images by providing:

* filename
* width
* height

If the resized image already exists, the API will serve the cached image instead of processing it again.

Image processing is handled using the **Sharp** library.

---

## Technologies Used

* Node.js
* Express
* TypeScript
* Jasmine (Testing)
* Sharp (Image processing)
* ESLint & Prettier

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## Build the Project

Compile TypeScript to JavaScript:

```bash
npm run build
```

---

## Start the Server

Run the development server:

```bash
npm run start
```

Server runs on:

```
http://localhost:3000
```

---

## API Endpoint

Resize an image using the following endpoint:

```
/api/images
```

### Query Parameters

| Parameter | Description                            |
| --------- | -------------------------------------- |
| filename  | Name of the image inside `assets/full` |
| width     | Desired image width                    |
| height    | Desired image height                   |

### Example Request

```
http://localhost:3000/api/images?filename=fjord&width=200&height=200
```

The API will:

1. Check if the resized image already exists.
2. If it exists → return the cached image.
3. If not → resize the original image and save it in `assets/thumb`.

---

## Running Tests

Run unit tests using Jasmine:

```bash
npm run test
```

---

## Project Structure

```
src
 ├ index.ts
 ├ app.ts
 ├ routes
 │   └ imageRoutes.ts
 └ utilities
     └ imageProcessing.ts

assets
 ├ full
 └ thumb

tests
 └ serverSpec.ts
```

---

## Author

Developed as part of the Udacity Full Stack JavaScript Nanodegree.
