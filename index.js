require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

require('./database/index');

const port = process.env.PORT || 3000;

const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Nguyen Dats',
    },
];

app.use(morgan('combined'));

app.post('/login', (req, res) => {
    // console.log("🚀 ~ req:", req.body)
    // const username = req.body.username
    // const user = users.find(u=>u.name===username);
    // console.log("🚀 ~ user:", user)

    return res.send('user');
});
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
    console.log(`App listening at http:://localhost:${port}`),
);
