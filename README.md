# Burgermaker
Project Title
This is a burger maker application that can add any burger of your choosing and then gives the option to devour
it and place it on its own list. This way you can keep track of the burgers you would like to eat some day and can
mark off the ones you do end up eating! JS, handlebars, controllers, database were all used in making
of this project

Getting Started
You can get a verison of this product up and running through heroku and can see the juicy backend code through the github
page.

Prerequisites
Install
-Express
-Express-handlebars
-mysql


Deployment
Heroky

Built With
React
MongoDB
Date-fns

Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Authors
Steven Leonardo - Initial work

License
This project is licensed under the MIT License
Full Stack Project starter with basic components routes and authentication. The project is in MVC format that includes the User model and controller. The first routes in the client are protected by the passport authentication using the local strategy. 

## Purpose and Inspiration
You can fork and run this to quickly have an MVC project up and running, then simply add the controllers models and components that your project needs. I wanted to have a place to start with no other models than the User model. This is currently at the point where you can:

## MVC
This project is structured in Full Stack Javascript with Mongoose Models REACT Views and Controllers. The heavy lifting for the authentication is done in src/utils/Auth.js.

- Register a new user
- Login with an existing user
- Log Out

## Tech Stack
+ [MONGOOSE ORM](https://www.npmjs.com/package/mongoose)
+ [EXPRESS](https://www.npmjs.com/package/express)
+ [REACT](https://reactjs.org/)
+ [NODE](https://nodejs.org/en/)
+ [PASSPORT](http://www.passportjs.org/docs/username-password/)

#### Install and run
Install all the dependencies with Yarn or NPM
`yarn install` <br>
Make sure you start Mongod and have mongoDB running..
`mongod` <br>
Then start the project
`yarn start`

## Register a New User
![Register A New User](/client/public/images/Register.png)

## Routes are protected from Users that are not logged in
![Login an existing User](/client/public/images/ProtectedRoute.png)


