const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const peliculas = require("./routes/peliculasAPI");

const mongodb = require("./middlewares/mongodb");

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


app.use(cors());
app.use(bodyParser.json());

app.use('/peliculas', peliculas);
