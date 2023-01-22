const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const db = require('./model/connect');

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

// app
//     .use(bodyParser.json())
//     .use((req, res, next) => {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         next();
//       })
//     .use('/', require('./routes'));

app
    .use(express.json())
    .use('/', require('./routes'));


const start = async () => {
    const connected = await db.connect();    
    app.listen(port, () => {
        if (connected) {
            console.log(`Running on port ${port}`);
        } else {
            console.log(`error - not connected`);
        }
    })
}
start();

