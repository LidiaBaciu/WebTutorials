const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();
const knex = require('knex');
const { json } = require('express');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');

const PORT = process.env.PORT || 3000;

const db = knex({
  client: 'pg',
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
  }
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    /*db.select('*').from('users')
        .then(users => {
            res.json(users)
        })
        .catch(err => res.status(400).json('error retrieving the users'))
        */
       res.send('it is working!');
})

app.post('/signin', (req, res) => {
    signin.handleLogin(req, res, db, bcrypt);
})

//app.post('signin', signin.handleLogin(db, bcrypt))

app.post('/register', (req, res) => {
    register.handleRegister(req, res, db, bcrypt);
});

app.get('/profile/:id', (req, res) => {
    profile.handleProfileGet(req, res, db);
})

app.put('/image', (req, res) => {
    profile.handleProfilePut(req, res, db);
})

app.post('/imageurl', (req, res) => {
    profile.handleApiCall(req, res);
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})
