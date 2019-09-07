# Microblog

Blogging app built with **React** and **Redux** 

Key learnings: using **Redux-Thunk to handle asychronous actions**

Notes:
* Backend code provided by [Rithm School](https://www.rithmschool.com/). 
* Pair programmed with [Emi Tsukuda](https://github.com/emitamago).

## Getting Started

1. Clone this repo
2. cd into the "backend" directory, install required packages, create and seed database, and start the server

```
cd backend
npm install
createdb microblog
psql microblog < data.sql
nodemon server.js 
```
This will start the server on port 3001

3. cd into the "frontend" directory, install required packages, then start the app

```
cd frontend
npm install
npm start
```
This will run the app on http://localhost:3000

## Running Tests
```
createdb microblog-test
cd backend
jest

cd frontend
npm test
```
## App Information

### Component Architecture
```
App
├─┬ components/Home
│ └── containers/TitleList
├─┬ containers/NewPost
│ └── components/PostForm
└─┬ containers/Post
  ├── components/CommentForm
  ├── components/CommentList
  ├── components/PostDisplay
  └── components/PostForm
```
