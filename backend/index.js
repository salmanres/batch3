const express = require('express')
const app = express()
const port = 3500
const cors = require('cors');
const userdata = require('./schema/UserSchema');

require('./database/mongoose');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('api is working on port 3500');
});

app.get('/userdata', (req, res) => {
    try {
        const data = [
            {
                rollno: 1,
                name: "rahul",
                class: "btech"
            },
            {
                rollno: 2,
                name: "ravi",
                class: "btech"
            },
            {
                rollno: 3,
                name: "tony",
                class: "bca"
            }
        ];

        res.status(255).json({ message: "data fetched successsfully", data });

    } catch (e) {
        console.log(e);
    };
});

app.post('/register', async (req, res) => {
    try {
        await userdata.insertOne(req.body);
        res.status(200).json({message: "user registration successgful"});
    } catch (e) {
        console.log(e);
    };
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
