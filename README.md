# Chateau

*A chat application inspired by a mashup of medieval grey and Slack.*

#### Build Frameworks

- [AngularJS](https://angularjs.org/)
- [Firebase](https://firebase.google.com/)

Chateau uses [Grunt](https://gruntjs.com/) to run the development server.

### Project Objectives

- Users can view a list of channels.
- Users can enter a specific channel to view its chat history.
- Users can create new channels.
- Users can send messages in a given channel.
- Users can create a username from which to send messages.

### Setup and Configuration

A development version of this app can be run by cloning the repository, installing dependencies, and then running Grunt's default task.

```
$ git clone https://github.com/jestann/chateau.git <chateau>
$ npm install
$ grunt
```

This runs a server on port 8080 with live reloading for development. It copies files to the dist directory which it serves, using [Grunt Hapi](https://github.com/athieriot/grunt-hapi) based on [HapiJS](http://hapijs.com/).

### Database Authentication

**Note:** This repository doesn't include the needed `config.js` file, which includes the authentication information for the Firebase database and initializes the database.

To run this app, developers must create their own `config.js` file with Firebase authentication information as noted in `config.example.js.`:

```
var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            storageBucket: "",
            messagingSenderId: ""
};
firebase.initializeApp(config);
```

Once this file is created and stored in the `app/scripts` directory, the app will authenticate correctly to Firebase.

#### File Structure

```
├── app
│   ├── assets
│   │   └── images
│   │       └── ...
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   ├── controllers 
│   │   │   └── ... 
│   │   ├── dependencies 
│   │   │   └── ...
│   │   ├── services
│   │   │   └── ...
│   │   ├── app.js
│   │   └── config.js    <-- this file must be created by the developer to initialize against a database
│   ├── styles
│   │   └── ...
│   └── templates
│       └── ...
├── Gruntfile.js
├── package.json
├── Procfile
├── README.md
└── server.js
```

### Future Features

- Medieval imagery and design.
- User authorization allows different access for different channels.
- Admin users can delete member users.
- Admin users can delete channels.

#### Implementation

A running test-drive version of the app exists [here](https://jestann-chateau.herokuapp.com).

#### Case Study

A description of the build project case study exists [here](http://jessbird.me/portfolio/chateau.html).