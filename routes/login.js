const express = require('express');
const router = express.Router();
const User = require('../models/Model_UserSchema')


router.post('/login', async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
        return res.status(409).json({ message: 'NO USER FOUND' })
    }

    return res.send(user)
})


module.exports = router;