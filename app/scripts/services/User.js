(function() {
    function User($firebaseArray) {
        let User = {
            userID: "",
            username: "",
            email: "",
            userObject: {},
            all: [],
        };
        
        // set up array of all users
        let userQuery = firebase.database().ref().child("users");
        User.all = $firebaseArray(userQuery);
        
        User.exists = function (username) {            
            let ifExists = false;
            for (let i=0; i<User.all.length; i++) {
                if (User.all[i].username.$value===username) {
                    ifExists = true;
                }    
            }
            return ifExists;
        }
        
        User.addUser = function (username, email, password) {
            
            if (!User.exists(username)) {
               console.log("checking");
               let error = null; firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                    if (error.code) {
                        error = error.message;
                        console.log(error);
                        return error;
                    }
                });
                
                if (!error) {
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            console.log(user);
                            User.all.$add({
                                userID: user.uid,
                                username: username,
                                email: email
                            });
                            // use set method - can use usename as unique key
            
                            User.userID = user.uid;
                            User.username = username;
                            User.email = email;
                        }
                    });
                }
            }
        };
        
        
        // don't use my own exists method, use firebase
        User.signIn = function (username, password) {
            let error = null;
            if (!User.exists(username)) {
                error = "username does not exist";
                console.log(error)
                return error;
            } else {
                    
                if (firebase.auth().currentUser) {
                    firebase.auth().signOut();
                }
            
                User.userID = User.all.filter((user) => user.username.$value===username)[0].userID.$value;
                User.username = username;
                User.email = User.all.filter((user) => user.username.$value===username)[0].email.$value;
                firebase.auth().signInWithEmailAndPassword(User.email, password).catch(function(error) {
                    if (error.code === "auth/wrong-password") {
                    error = "wrong password";
                    } else {
                        error = error.message;
                    }
                });
                    
                if (error) {
                    User.userID = "";
                    User.username = "";
                    User.email = "";
                    return error;
                }
            }
        };

        User.signOut = function () {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut();
            }
        };
        
        return User;
    }
    
    angular
        .module('blocChat')
        .factory('User', ['$firebaseArray', User]);
})();