const { Users } = require('../models');

const userdata = [
    {
        "email": "stemby1v@netscape.com",
        "name": "kmccarver1v",
        "password": "rO2ShdJDDwrz"
    },
    {
        "email": "lbernucci1w@ft.com",
        "name": "khindshaw1w",
        "password": "qZiQOX9f0pM"
    },
    {
        "email": "jtwelftree1x@google.com",
        "name": "oskally1x",
        "password": "SXBzUae6y"
    },
    {
        "email": "crookesby1y@skype.com",
        "name": "cglencrosche1y",
        "password": "bwlcxyw"
    },
    {
        "email": "krubinsky1z@tuttocitta.it",
        "name": "dvannoort1z",
        "password": "XCQRoe9iooU"
    },
    {
        "email": "snewbatt20@zdnet.com",
        "name": "bsaintepaul20",
        "password": "9tN60121c"
    },
    {
        "email": "lpirelli21@weebly.com",
        "name": "gschmuhl21",
        "password": "OVf4su"
    },
    {
        "email": "tiron22@google.nl",
        "name": "elorenzetti22",
        "password": "8dHUijYzx"
    },
    {
        "email": "walenikov23@ameblo.jp",
        "name": "hgreenhead23",
        "password": "Sbf7wBaYgF"
    },
    {
        "email": "htooting24@squidoo.com",
        "name": "kspoors24",
        "password": "VBQzm8dArJ"
    },
    {
        "email": "gmajury25@mysql.com",
        "name": "moteague25",
        "password": "kD4Wec6RM"
    },
    {
        "email": "kclohisey26@discuz.net",
        "name": "gsivior26",
        "password": "BW5YIHA8PW"
    }
]




const seedUsers = () => Users.bulkCreate(userdata);

module.exports = seedUsers;