const express = require('express');
const mainRouter = require('./router/index.js');

const app = express();
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(mainRouter);

app.listen(PORT , () => {
    console.log(`app is on ${PORT}`)
})