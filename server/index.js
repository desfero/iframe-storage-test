const express = require("express");
const app = express();

let options = { httpOnly: true, secure: true };

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get("/get", (req, res) => {
    res.send("Express on Vercel");
});
app.get("/set", (req, res) => {
    res.cookie("test", +(new Date()), options);

    res.send("Set");
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
