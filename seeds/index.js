const sequelize = require('../config/connection');

const seedComments = require('./comments');
const seedBlogs = require('./blogs');
const seedUsers = require('./users');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();
  console.log('------------------------------------------------------------------------------------------------------------------------------------------------');
  await seedBlogs();
  console.log('------------------------------------------------------------------------------------------------------------------------------------------------');
  await seedComments();
  console.log('------------------------------------------------------------------------------------------------------------------------------------------------');

  process.exit(0);
};

seedAll();