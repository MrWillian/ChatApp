const axios = require('axios');
const User = require('../models/User');

module.exports = {
    async index(req, res) {

        const users = await User.find({}, (err, docs) => {
            if (!err){ 
                console.log(docs);
                process.exit();
            } else {
                throw err;
            }
        });

        return res.json(users);
    },

    // async store(req, res) {
    //     const { user } = req.body;
    //     const userExists = await User.findOne({ name });

    //     if (userExists) {
    //       return res.json(userExists);
    //     }


    // }
}