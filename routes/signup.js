const express = require('express')
const router = express.Router()
const User = require('../models/Model_UserSchema')

router.get('/test', (req, res) => res.send('route testing success!'));


// Defined get data(index or listing) route
router.get('/getData', (req, res) => {
    try {
        User.find()
            .then(users => {
                res.json(users)
                console.log(users)
            })
            .catch(err => {
                res.status(400).send(`unable to save to database ${err}`);
            });
    } catch (error) {

    }
})
// router.get('/getall', async (req, res) => {
//     const posts = await Posts.find()

//     if (!posts) {
//         return res.status(409).json({ message: "NO POSTS YET" })
//     }

//     res.status(200).json(posts)
// })

 

router.post("/addData", async (req, res) => {
    try {
        const user = req.body
        const hash = hashPassword(user.password);
        const newUser = new User(user)
        console.log('newUser', newUser)
        await newUser.save()
        .then(result => {
                res.send(result)
                console.log("result: ",result)
            })
            .catch(err => {
                res.send({ message: err })
            })
    } catch (error) {
        console.log('Error:', error)
    }
})

// router.post('/add', (req, res) => {
//     const userInfo = req.body;
//     const user = new User(userInfo);

//     console.log('user', user)

//     user.save().then(() => {
//         res.send({ result: "Registered Successfully!" })
//     }).catch(e => {
//         res.send({ message: e.message });
//     })

// })

router.get('/getData/:id', (req, res) => {
    User.findById(req.params.id)
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(400).send(`unable to save to database ${err}`);
        });
})

router.post('/add/:id', (req, res) => {
    User.findById(req.params.id)
        .then(users => {
            users.selectLevel = req.body.selectLevel
            users.score = req.body.score
            users.save()
                .then(users => {
                    res.status(200).json({ 'level': 'Level Selected' });
                })
                .catch(err => {
                    res.status(400).send(`unable to save to database ${err}`);
                });
        })
        .catch(err => {
            res.status(400).send(`unable to save to database ${err}`);
        });
})

module.exports = router



// fetch('/posts/postsData', {
// method: 'POST', 
// headers: {
//  'Content-Type': 'application/json'
// },
//  body: JSON.stringify({
//      name: "Adnan"
// })
// })
// .then(res => res.json()).then(data => console.log(data))