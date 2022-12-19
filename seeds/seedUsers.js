const sequelize = require('../config/connection');
const { User, Note } = require('../models');

const userdata = [
    {
        username: 'sokomofo',
        email: 'superzerox1@hotmail.com',
        password: 'Abc123!'
    }
];
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
module.exports = seedUsers;