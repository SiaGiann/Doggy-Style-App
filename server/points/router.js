const Router = require('express').Router
const Points = require('./model')
const requireUser = require('../authentication/middleware').requireUser
const db = require('../models')
const { Op } = require('sequelize')

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

// Finds the users with similar taste on dogs
// 1.for the current user we find the dogs that he likes sorted by Points
// 2. using these ids we find the users that like the same dogs
// 3. we use reduce to get the unique users and then we return the first 10
router.get('/rank/:id', requireUser, (req, res) => {
  const userId = Number(req.params.id)
  Points.findAll({ // step 1
    attributes: ['dog_id'],
    where: { user_id: userId, points: { [Op.gt]: 0 } },
    sort_by: [['points', 'DESC']]
  })
  .then(breeds => {
    if (breeds.length <= 0) {
      throw 'No likes error' // so if you dont like dogs you get this error
    }
    dogIds = breeds.map(breed => { // i need only the dog_id from the seq object that I have from the findAll
      return breed.dog_id
    })
    return Points.findAll({ // here is the step 2
      attributes: ['user_id'],
      where: { user_id: { [Op.ne]: userId }, points: { [Op.gt]: 0 }, dog_id: dogIds }
    })
  })
  .then(matches => {
    if (matches.length <= 0) {
      throw 'No matches error'
    }
    const uniq = matches.reduce((x, y) => x.includes(y.user_id) ? x : [...x, y.user_id], []) // step 3
    res.json(uniq.slice(0, 9))
  })
  .catch(err => {
    switch (err) {
      case 'No likes error':
        res.status(202).send({ message: 'Your current votes do not allow us to find you suitable matches yet. Please like some of our cuties and try again!' })
        break
      case 'No matches error':
        res.status(202).send({ message: 'No matches were found based on your woofs! Please like some of our cuties or try again later!' })
        break
      default:
        res.status(500).send({ message: `something went wrong`, err })
        break
    }
  });
})

module.exports = router
