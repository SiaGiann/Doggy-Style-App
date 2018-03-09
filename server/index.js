const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const usersRouter = require('./users/router')
const pointsRouter = require('./points/router')
const authRouter = require('./authentication/router')
const tokenMiddleware = require('./authentication/middleware').tokenMiddleware
const requireUser = require('./authentication/middleware').requireUser

const port = process.env.PORT || 4001

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(tokenMiddleware)
  .use(usersRouter)
  .use(pointsRouter)
  .use(authRouter)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

// returns a random dog image and its breed name
app.get('/getdog', requireUser, (req, res) => { // requireUser means that you need to be loged in to have the action
  const dogApi = "https://dog.ceo"
  axios.get(dogApi+'/api/breeds/image/random')
    .then(function(response) {
      let imgUrl = response.data.message // https://dog.ceo/api/img/maltese/n02085936_10199.jpg
      let breed = imgUrl.split('/').slice(-2, -1).join('') // maltese
      res.json({ url: imgUrl, breed: breed })
    })
    .catch(function(error) {
      res.status(500).send({ message: 'Oops! There was an error getting your dog. Please try again' })
    })
})

app.listen(port, () => {
  console.log(`listening for incoming connections on http://localhost:${port}`)
})
