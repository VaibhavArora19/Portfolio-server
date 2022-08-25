const express = require('express');
const cors = require('cors');

const app = express();

const contactRoutes = require('./routes/Contact');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.use(contactRoutes);

app.listen(process.env.PORT || 8080, console.log('Listening on port 8080'));