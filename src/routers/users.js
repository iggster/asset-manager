const express = require('express')
const router = new express.Router()
const User = require('../models/user')


//Delete user.
router.delete('/users', async (req, res) => {
    res.status(200).send('Deleting user.')
})


//Get user profile.
router.get('/users/me', async (req, res) => {
    res.status(200).send('Get user profile.')
})


//Update user.
router.patch('/users', async (req, res) => {
    res.status(200).send('Updating user.')
})

//Create user
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.getAuthenticationToken()
       // sendWelcomeEmail(user.email, user.name)
       console.log(user)
       console.log(token)
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }

})

//User login.
router.post('/users/login', async (req, res) => {
    res.status(200).send('Logging in user.')
})

//User logout.
router.post('/users/logout', async (req, res) => {
    res.status(200).send('Logging out user.')
})

//User logout all sessions.
router.post('/users/logoutALL', async (req, res) => {
    res.status(200).send('Logging out all sessions.')
})

module.exports = router


