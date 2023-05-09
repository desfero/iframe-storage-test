const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser());

let options = { httpOnly: true, secure: true, sameSite: "None", maxAge: 900000 };

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get("/get", (req, res) => {
    const log = req.cookies;

    res.send("Cookies: " + JSON.stringify(log));
});
app.get("/set", (req, res) => {
    const log = req.cookies;

    let next = +(new Date());
    res.cookie("test", next, options);

    res.send("Current cookies: " + JSON.stringify(log) + "Next cookies: " + JSON.stringify({ test: next }));
});
app.get("/clear", (req, res) => {
    res.clearCookie("test", options);

    res.send("Cleared");
});
app.listen(5000, () => {
    console.log("Running on port 5000.");
});
// Export the Express API
module.exports = app;
