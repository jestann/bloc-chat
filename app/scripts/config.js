var config = {
            apiKey: process.env.APIKEY,
            authDomain: process.env.AUTH_DOMAIN,
            databaseURL: process.env.DATABASE_URL,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);