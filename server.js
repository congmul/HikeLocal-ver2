const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, './public/signin.html'));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});