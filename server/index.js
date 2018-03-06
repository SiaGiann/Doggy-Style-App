const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models')
const axios = require('axios')

const port = process.env.PORT || 4001

const app = express()
  .use(cors())
  .use(bodyParser.json())

const { User } = db
const dogApi = "https://dog.ceo"

// returns a random dog image and its breed name
app.get('/', (req, res) => {
  axios.get(dogApi+'/api/breeds/image/random')
    .then(function(response) {
      let imgUrl = response.data.message // https://dog.ceo/api/img/maltese/n02085936_10199.jpg
      let breed = imgUrl.split('/').slice(-2, -1).join('') // maltese
      res.json({
        url: imgUrl,
        breed: breed
      })
    })
    .catch(function(error) {
      console.error(error)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting your dog. Please try again' })
    })
})

// //retrieving the doggy rank page
// app.get('/mydoggyrank', (req, res) => {
//   const mydoggyrank = myDoggyRank
//     .findAll()
//     .then((mydoggyrank) => {
//       res.json(mydoggyrank)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500)
//       res.json({ message: 'Oops! There was an error getting your rank. Please try again' })
//     })
// })
//
// //retrieving all users
// app.get('/users', (req, res) => {
//   const users = Users
//     .findAll()
//     .then((users) => {
//       res.json(users)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500)
//       res.json({ message: 'Oops! There was an error retrieving the users. Please try again' })
//     })
// })
//
// //retrieving users with their id
// app.get('/users/:id', (req, res) => {
//   const users = Users
//     .findById(req.params.id)
//     .then((user) => {
//       if (user) {
//         res.json(user)
//       } else {
//         res.status(404)
//         res.json({ message: 'User not found!' })
//       }
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500)
//       res.json({ message: 'Oops! There was an error getting the user. Please try again' })
//     })
// })
//
// //creating users
// app.post('/users', (req, res) => {
//   const user = req.body
//   console.log(user)
//
//   // insert the new data into our database
//   User.create(user).then(entity => {
//
//     // send back the 201 Created status and the entity
//     res.status(201).send(entity)
//   })
//
// })
//
// //updating user info
// const updateOrPatch = (req, res) => {
//   const userId = Number(req.params.id)
//   const updates = req.body
//
//   app.findById(req.params.id)
//     .then(entity => {
//       if (entity.userId !== req.user.id) {
//         res.status(403).send({
//           message: 'You\'re not allowed to edit this user!'
//         })
//       }
//       else {
//         return entity.update(updates)
//       }
//     })
//     .then(final => {
//       res.json(final)
//     })
//     .catch(error => {
//       res.status(500).send({
//         message: "Something went wrong",
//         error
//       })
//     })
// }
//
// app.put('/users/:id', updateOrPatch)
// app.patch('/users/:id', updateOrPatch)
//
// //delete
// app.delete('/users/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(entity => {
//       return entity.destroy()
//     })
//     .then(_ => {
//       res.send({
//         message: 'The user was deleted succesfully'
//       })
//     })
//     .catch(error => {
//       res.status(500).send({
//         message: 'Something went wrong',
//         error
//       })
//     })
// })

app.listen(port, () => {
  console.log(`listening for incoming connections on http://localhost:${port}`)
})
