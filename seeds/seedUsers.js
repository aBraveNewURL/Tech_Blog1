const sequelize = require('../config/connection');
const { User, Note } = require('../models');

const userdata = [
    {
        username: '',
        email: '',
        password: ''
    }
];
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
module.exports = seedUsers;