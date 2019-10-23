const express = require('express')
const router = express.Router()
const blood_Requirment = require('../models/Model_BloodRequirment')


router.post('/bloodrequirement', (req, res) => {
    const post = req.body

    const newPost = new blood_Requirment(post)

    newPost.save()
        .then(result => {
            res.send(result)
            console.log("Result: ", result)
        }).catch(err => {
            res.send({ message: err })
        })
})

router.get('/getall', async (req, res) => {
    const posts = await Posts.find()

    if (!posts) {
        return res.status(409).json({ message: "NO POSTS YET" })
    }

    res.status(200).json(posts)
})


module.exports = router