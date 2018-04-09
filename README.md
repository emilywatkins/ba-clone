# Bon App

#### Exercise in Angular, Typescript, and Firebase 4.6.18

#### Emily Watkins

## Description

This application is a clone of the Bon Appetit website (https://www.bonappetit.com/). The home page has a fairly simple style and uses an interesting template for displaying featured articles and recipes, which I hope to replicate in applying CRUD functionality to an admin of the site.

Nagivate to the below link to view and interact with the site.
https://ba-clone.firebaseapp.com/

## Setup

Not necessary to interact with the app. However if you would like to run this on your local machine, follow these steps:

Clone this repository: https://github.com/emilywatkins/ba-clone.git

`$ npm install`

`$ ng serve`

Navigate to http://localhost:4200/

To set up Firebase:
* Create a Firebase account at firebase.google.com
* Create a project and choose 'add Firebase to your web app'
* On the left menu, under Develop, choose 'Database', click 'Rules' in the upper tab for that project, and make sure read and write are both true.
* Create a file in the app folder of the project files to hold the Firebase API credentials (src/app/api-keys.ts) and replace the below x's with the credentials given when project was created

export var masterFirebaseConfig = {  
    apiKey: "xxxx",  
    authDomain: "xxxx.firebaseapp.com",  
    databaseURL: "https://xxxx.firebaseio.com",  
    storageBucket: "xxxx.appspot.com",  
    messagingSenderId: "xxxx"  
  };

* To set up user authentication, navigate to Develop > Authentication > Sign-in method and enable Google.

## Functionality

Current:
A non-admin user can navigate to the site, click on a displayed recipe, and view that recipe.

An admin user is able to log in from the home page and have access to navigation unique from a non-admin user.

An admin user can add new recipes.

Future:
An admin user will be able to edit and delete recipes.

Upon creation, the recipes or articles will be formatted to render in the html with an image, title, and description.

Pipes will be incorporated in order to show featured articles, which will display on the home page, or to display similar articles on grouped pages such as most popular, healthy, regional, etc.


## Technologies Used

* Angular
* Typescript
* Firebase

## License

Licensed under the MIT License.

Copyright (c) 2018 Emily Watkins
