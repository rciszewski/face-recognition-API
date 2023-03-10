const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const { DB_INT_URL } = require('./config');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
  client: 'pg',
  connection: DB_INT_URL
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