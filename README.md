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

This runs a server on port 8080 with live reloading for development. It copies files to the dist directory which it serves using [Grunt Hapi](https://github.com/athieriot/grunt-hapi) based on [HapiJS](http://hapijs.com/).

### Database Authentication

**Note:** This repository uses environment variables to populate the `config.js` file, which initializes against the Firebase database.

To run this app, developers must create a `config.js` file with their own Firebase authentication information or populate environment variables as given in the existing `config.js`:

```
var config = {
            apiKey: process.env.APIKEY,
            authDomain: process.env.AUTH_DOMAIN,
            databaseURL: process.env.DATABASE_URL,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
```

Once this file is correctly populated, the app will authenticate to Firebase.

#### File Structure

The app directory contains all site files. These are copied to the dist directory to be served.

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
│   │   └── config.js
│   ├── styles
│   │   └── ...
│   └── templates
│       └── ...
├── dist
│   └── ...
├── Gruntfile.js
├── package.json
├── Procfile
├── README.md
└── server.js
```

### Future Features

- Integrate design responsiveness to improve experience on mobile devices.
- Improve storage and retrieval of configuration variables using environment variables.
- User authorization allows different access for different channels.
- Admin users can delete member users.
- Admin users can delete channels.
- Revamp design with medieval imagery using [Bootstrap](https://getbootstrap.com/).

#### Implementation

A running test-drive version of the app exists [here](https://jestann-chateau.herokuapp.com).