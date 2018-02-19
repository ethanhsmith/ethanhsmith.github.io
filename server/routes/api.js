const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const crypto = require('../lib/crypto')
const users = require('../lib/users')
const auth = require('../lib/auth')

const router = express.Router()
router.use(bodyParser.json())

// Sign in post setup
router.post('/signin',
  signIn,
  auth.issueJwt
)

// Register post setup
router.post('/register',
  register,
  auth.issueJwt
)

function signIn (req, res, next) {
  users.getByName(req.body.username)
    .then(user => {
      // Check if user exists by username, if yes then return the user or if invalid run invalidCredentials
      return user || invalidCredentials(res)
    })
    .then(user => {
      // When user exists, and is true, run crypto to hash the password and save it to database
      return user && crypto.verifyUser(user.hash, req.body.password)
    })
    .then(isValid => {
      // If the resulting hash is a valid hash, and this is 'secure', then post this data to database knowing the data is SSL
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      // Catch any errors during sign in and return a 400 status
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function register (req, res, next) {
  users.exists(req.body.username)
    .then(exists => {
      // Check if username is taken in the database
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }

      // Create user and move to next middleware
      users.create(req.body.username, req.body.password)
        .then(() => next())
    })
    .catch(err => {
      // Catch any errors that occur during this config, and throw a 400 status.
      res.status(400).send({message: err.message})
    })
}

function invalidCredentials (res) {
  // If credentials are invalid, push 400 status with type INVALID_CREDENTIALS
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

// express-jwt middleware lets us use a function as the secret
function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

// If quote is called, adn the req.user object is real it gives extra info otherwise just displays public response.
router.get('/quote',
  verifyJwt({
    // Doesn't require login.
    credentialsRequired: false,
    secret: getSecret
  }),
  (req, res) => {
    // Show public quote
    const response = {message: 'You are viewing a public quote.'}
    if (req.user) {
      // Show additional info if user exists (eg, username)
      response.user = `Your username is: ${req.user.username}`
    }
    res.json(response)
  }
)

// Protect all routes beneath this point
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
)

// These routes are protected
router.get('/secret', (req, res) => {
  res.json({
    message: 'This is a SECRET quote.',
    user: `Your username is: ${req.user.username}`
  })
})

module.exports = router
