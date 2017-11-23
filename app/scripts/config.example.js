// This file demonstrates the config.js file needed for running this app against a Firebase database.

var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            storageBucket: "",
            messagingSenderId: ""
};
firebase.initializeApp(config);

module.exports = config;