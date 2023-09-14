# E-Commerce Practice

Creation of the backend for an E-commerce for practicing Sequelize and Object Relational Mappers

## Description

This code explores the Object Relation Model using Sequelize and the progam Insomnia to use HTTP requests. This emulates a simple store inventory system that tracks products, categories of products, and tags that can be attached to products. New databse items are created with Sequelize using models that construct the SQL rows after the seeds are run. Items can be viewed, added, updated, and deleted through Insomnia since there is not a front end webpage.

## Installation

- Go to Insomnia's webpage and follow instructions to install
- Git clone folder
- Navigate to root and run "npm i" and then "npm start"
- Connecting through localhost:3001/api/(categories, products, and tags) using Insomnia allows for requests to be made by HTTP.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Credits

- Donnie Rawlings: https://github.com/drawlin22
- Chelsea Wagner: https://github.com/caf62219
- Nedda Elsayed: https://github.com/lven-nemsy
- Phind for showing how to use error in product-route.js instead of message. Console log is red.

## Links

Link to repo:  
https://github.com/Kylyote/bootcamp-e-commerce  
Link to video:  
https://drive.google.com/file/d/1dGo6QONhsgtWNDqaZAn14gXxlFFz5MU2/view
