const STATE_KEY = "state",
    DB_CONFIG = {
        apiKey: "AIzaSyCib-TDFLdywHeDcOUapTxbkycC0wnDD1w",
        authDomain: "memo-wall.firebaseapp.com",
        databaseURL: "https://memo-wall.firebaseio.com",
        storageBucket: "memo-wall.appspot.com",
    },
    DB_USER = {
        name: "memo-wall.app@gmail.com",
        password: "password"
    };

firebase.initializeApp(DB_CONFIG);
firebase.auth().signInWithEmailAndPassword(DB_USER.name, DB_USER.password);

var database = firebase.database();

export const loadState = (callback)  => {
    database.ref(STATE_KEY).once("value", function(snapshot) {
        callback(snapshot.val());
    });
};

export const saveState = (state) => {
    database.ref(STATE_KEY).set(state);
};
