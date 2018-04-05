# Bon App

#### Exercise in Angular, Typescript, and Firebase 4.6.18

#### Emily Watkins

## Description

This application is a clone of the Bon Appetit website (https://www.bonappetit.com/). The home page has a fairly simple style and uses an interesting template for displaying featured articles and recipes, which I hope to replicate in applying CRUD functionality to an admin of the site.

## Setup

This page will be deployed to a live site, but in the meantime, here are the setup instructions.

Clone this repository and navigate to root directory.

To install dependencies:

`$ npm install`  

-Firebase instructions: (note to self) looking for an example. can a user access my project's database somehow? or do i need to set up a sample.json file for them to access? not sure what this will look like, but will ultimately be solved once deployed-

To run program and open in browser:

`$ ng serve --open`


## Functionality

Current:
A non-admin user can navigate to the site, click on a displayed recipe, and view that recipe.

Upcoming:
An admin user will be able to log in from the home page and have access to navigation unique from a non-admin user.

An admin user will have access to CRUD functionality after logging in. They will be able to create, edit, delete recipes or articles.

Upon creation, the recipes or articles will be formatted to render in the html with an image, title, and description.

Pipes will be incorporated in order to show featured articles, which will display on the home page, or to display similar articles on grouped pages such as most popular, healthy, regional, etc.


## Technologies Used

* Angular
* Typescript
* Firebase

## License

Licensed under the MIT License.

Copyright (c) 2018 Emily Watkins
