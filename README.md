# Microblog

Blogging app built with React and Redux 

### Key learnings:
* Using Redux-Thunk to handle asychronous actions
* Using client side routing

_Backend code provided by [Rithm School](https://www.rithmschool.com/). Pair programmed with [Emi Tsukuda](https://github.com/emitamago)._

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

3. cd into the "frontend" directory, install required packages, then start the app

```
cd frontend
npm install
npm start
```

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
