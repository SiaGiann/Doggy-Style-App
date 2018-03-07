const Router = require('express').Router
const Points = require('./model')
const requireUser = require('../authentication/middleware').requireUser
const db = require('../models')

const router = new Router()
const { Dog } = db

// Vote up: finds or creates a dog by its breed name and returns its id
// next using this dog id it finds or creates a points record which binds together the dog and the current user
// then it updates this record by adding 5 points to the record's points
router.post('/voteup', requireUser, (req, res) => {
  const { user_id, breed } = req.body
  Dog
  .findOrCreate({ // findorcreate returns an array of two elements
    where: { breed: breed.toLowerCase() }
  })
  .spread((dog, created) => { // the spread divides the array into its two parts
    return dog.id
  })
  .then((dog_id) => {
    return Points.findOrCreate({
      where: { user_id: user_id, dog_id: dog_id },
      defaults: { points: 0 }
    })
  })
  .spread((points, created) => {
    let newPoints = { points: points.points + 5 }
    return points.update(newPoints)
  })
  .then(final => {
    res.json(final)
  })
  .catch(err => {
    res.status(500).send({ message: `something went wrong`, err })
  })
})

// Vote down: finds or creates a dog by its breed name and returns its id
// next using this dog id it finds or creates a points record which binds together the dog and the current user
// then it updates this record by subtracting 3 points to the record's points
router.post('/votedown', requireUser, (req, res) => {
  const { user_id, breed } = req.body
  Dog
  .findOrCreate({ // findorcreate returns an array of two elements
    where: { breed: breed.toLowerCase() }
  })
  .spread((dog, created) => { // the spread divides the array into its two parts
    return dog.id
  })
  .then((dog_id) => {
    return Points.findOrCreate({
      where: { user_id: user_id, dog_id: dog_id },
      defaults: { points: 0 }
    })
  })
  .spread((points, created) => {
    let newPoints = { points: points.points - 3 }
    return points.update(newPoints)
  })
  .then(final => {
    res.json(final)
  })
  .catch(err => {
    res.status(500).send({ message: `something went wrong`, err })
  })
})

module.exports = router
