const router = require("express").Router();
const sequelize = require("../config/connection");
const { Note, User, Comment } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
  Note.findAll({
    attributes: ["id", "category", "description", "gallery_id"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "note_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbnoteData) => {
      const notes = dbnoteData.map((note) => note.get({ plain: true }));

      res.render("homepage", {
        notes,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("error-500");
    });
});

router.get("/note/:id", (req, res) => {
  Note.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category", "description", "gallery_id"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "note_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbnoteData) => {
      if (!dbnoteData) {
        res.render("error-404");
        return;
      }

      const note = dbnoteData.get({ plain: true });

      res.render("singlePost", {
        note,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("error-500");
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/dashboard", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("dashboard");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/signup");
    return;
  }
  res.render("register");
});

module.exports = router;
