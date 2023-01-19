# Tech Blog

## Challenge 14: Model-View-Controller (MVC)
This exercise is our cohort's 14th challenge centering on implementing the MVC model, starting with the introduction of Handlebars to our projects.

## Installation
Several packages are used in this assignment. After cloning the repository, simply run `npm i` to install the needed modules. Next, you'll need to start up the database with `mysql -u root -p` followed by your password. Run `source db/schema.sql;` to import the schema, confirm that we're using the correct DB with `use tech_blog;`. Lastly, run `npm start` to bring up the rest of the application!

## Usage
Once started, the application will present a simple home screen with login and register features

![main](https://user-images.githubusercontent.com/108553499/213382140-791dfb1d-4f14-4501-a41a-44ebb94d884d.jpg)

Select whichever is pertinent and you'll be taken to your Gallery. From here you'll be able to create a new note/post
![wadepost](https://user-images.githubusercontent.com/108553499/213382575-064a3295-c867-4576-9109-fae79fcc9e87.jpg)

If you forget to log out, your session will expire in a few minutes and you'll be required to log in again- so no need to worry!
