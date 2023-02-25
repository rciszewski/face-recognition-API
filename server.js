const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const { DB_KEY } = require('./config');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
  client: 'pg',
  connection: {
    host : 'dpg-cfs0e8pgp3jqrleqogh0-a',
    port : 5432,
    user : 'smartbrain_qahb_user',
    password : DB_KEY,
    database : 'smartbrain_qahb'
  }
});

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => res.send('success beautiful'))

app.post('/signin', (req, res) => {signin.handleSignIn(req, res, bcrypt, db)})
app.post('/register', (req, res) => {register.handleRegister(req, res, bcrypt, db)})
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)});
app.put('/image', (req, res) => {image.handleImageSubmit(req, res, db)});
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
})