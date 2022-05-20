# Projet 11

## Hosting :
This project is hosted with Heroku.

This site is currently available at URL :

[https://kasa-fandria.herokuapp.com/](https://kasa-fandria.herokuapp.com/)

---


## How to run locally:
1. Download repository
2. Install dependencies :
`npm install`
3. Start scripts :
`npm run start`

By default, this app uses port 3000, and you're good to go.

---
However, if you want to use another port, then you need to set an environment variable called `REACT_APP_API_URL` to be able to fetch data from `public/logements.json` file

Example: 
- create an `.env` file at the root of the project
- insert in this file the following : `REACT_APP_API_URL=http://localhost:1234`


---
## Create React App :
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

