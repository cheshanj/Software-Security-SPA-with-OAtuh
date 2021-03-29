const express = require("express");
const path = require("path");

var cookieParser = require('cookie-parser')

const app = express();


const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '555382673677-6t26jc8ug2lrrsofa80bmkrv3uo7ujgu.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

app.disable("etag");

app.set('views', __dirname + '/Frontend/static/js/views');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());


app.use("/static", express.static(path.resolve(__dirname, "Frontend", "static")));

app.get("/login", (req, res) => {

    res.render('login.ejs');

});

app.post('/login', (req, res) => {

    let token = req.body.token;
    console.log("User toke is: " + token);

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log(payload);
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
    }
    verify()
        .then(() => {

            res.cookie('session-token', token);
            res.send('success');

        }).catch(console.error);
})

app.get("/*", (req, res) => {

    res.sendFile(path.resolve(__dirname, "Frontend", "index.html"));
    // res.render((__dirname, "/Frontend/static/js/views", "login.ejs"));

});


app.listen(process.env.PORT || 4800, () => console.log("Server started and running!!"));

