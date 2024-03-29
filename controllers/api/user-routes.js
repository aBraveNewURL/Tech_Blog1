const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const dbUserData = await Users.create({
      name: req.body.username,
      email: req.body.userEmail,
      password: req.body.userPassword,
    });

    const user = dbUserData.get({ plain: true });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = user.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Users.findOne({
      where: {
        email: req.body.loginEmail,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.loginPassword);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const user = dbUserData.get({ plain: true });
    console.log(user);
    console.log(user.id);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = user.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;