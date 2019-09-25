const axios = require('axios');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        await User.find({}, (err, docs) => {
            if (!err){
                return res.json(docs);
            } else {
                throw err;
            }
        });
    },

    async store(req, res) {
        const { name, email, age, cellNumber } = req.body;
        const userExists = await User.findOne({ name });

        if (userExists) {
          return res.json(userExists);
        }

        const user = await User.create({
            name,
            email,
            age,
            avatar: null,
            cell_number: cellNumber,
        });

        return res.json(user);
    },
}
