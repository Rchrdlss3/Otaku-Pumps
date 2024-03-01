# Otaku Pumps
[![My Skills](https://skillicons.dev/icons?i=mongo,express,react,nodejs,js,html,css,mui)](https://skillicons.dev)
## Overview
...Project Status: WIP
## Installation
### NodeJS 
```
curl "https://nodejs.org/dist/latest/$(curl -s https://nodejs.org/dist/latest/ | grep "pkg" | cut -d'"' -f 2)" -o "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```
### MUI
```
npm install @mui/material @emotion/react @emotion/styled
```
### ExpressJS
```
 npm install express
```
### Mongoose
```
npm i mongoose
```
### Nodemon
```
npm i nodemon
```
## Project Structure
```
.
└── otaku-pumps/
    ├── client
    └── services/
        ├── helpers/
        │   └── ...
        ├── models/
        │   └── ...
        ├── routes/
        │   └── ...
        ├── package-lock.json
        ├── package.json
        ├── server.js
        └── README.md
```
