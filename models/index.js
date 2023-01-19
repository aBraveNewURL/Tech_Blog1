const Blogs = require('./Blogs');
const Comments = require('./Comments');
const Users = require('./Users');

Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Users.hasMany(Blogs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Comments.belongsTo(Users, {
    foreignKey: 'user_id',
  });

Blogs.belongsTo(Users, {
    foreignKey: 'user_id',
  });

Blogs.hasMany(Comments, {
    foreignKey: 'blog_id',
  });

Comments.belongsTo(Blogs, {
    foreignKey: 'blog_id',
})
module.exports = { Users, Comments, Blogs };