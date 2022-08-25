const express = require('express')
const router = express.Router()
const addUserTemplateCopy = require('../models/AddUserModels')
const addNewsTemplateCopy = require('../models/AddNewsModel')

router.post('/addNews', (request, response) => {
    const addedNews = new addNewsTemplateCopy({
        title: request.body.title,
        imageUrl: request.body.imageUrl,
        text: request.body.text
    })
    addedNews.save()
        .then(data => response.json(data))
            .catch(err => response.json(err))
})

router.post('/addNewUser', (request, response) => {
    const addedUser = new addUserTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        avatarUrl: request.body.avatarUrl,
    })
    addedUser.save()
        .then(data => response.json(data))
        .catch(err => response.json(err)
        )
})
//Get all user
router.get('/getUsers', (req, res) => {
    addUserTemplateCopy.find()
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

router.get('/getNews', (req, res) => {
    addNewsTemplateCopy.find()
        .then(data => res.json(data))
        .catch(error => res.json(error))
})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
        await addNewsTemplateCopy.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            text: req.body.text
        });
        // Send response in here
        res.send('Item Updated!');

    } catch(err) {
        console.error(err.message);
        res.send(400).send('Server Error');
    }
});

// //Get user by ObjectID
// router.get('/getUserByID/:id', (request, response) => {
//     addNewsTemplateCopy.findByIdAndUpdate(request.params.id)
//         .then(data => response.json(data))
//         .catch(error => response.json(error))
// })

