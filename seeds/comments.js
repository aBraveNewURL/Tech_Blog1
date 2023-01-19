const { Comments } = require('../models');

const commentdata = [
    {
        "comment": "Re-engineered empowering help-desk",
        "user_id": 49,
        "blog_id": 102
    },
    {
        "comment": "Enterprise-wide executive open architecture",
        "user_id": 48,
        "blog_id": 27
    },
    {
        "comment": "Monitored human-resource synergy",
        "user_id": 21,
        "blog_id": 134
    },
    {
        "comment": "Ergonomic background support",
        "user_id": 82,
        "blog_id": 100
    },
    {
        "comment": "Public-key composite capacity",
        "user_id": 50,
        "blog_id": 124
    },
    {
        "comment": "Team-oriented 3rd generation ability",
        "user_id": 67,
        "blog_id": 167
    },
    {
        "comment": "Grass-roots maximized parallelism",
        "user_id": 22,
        "blog_id": 17
    },
    {
        "comment": "Reduced user-facing ability",
        "user_id": 34,
        "blog_id": 174
    },
    {
        "comment": "Profound uniform projection",
        "user_id": 78,
        "blog_id": 170
    },
    {
        "comment": "Triple-buffered bandwidth-monitored toolset",
        "user_id": 80,
        "blog_id": 6
    },
    {
        "comment": "Realigned impactful time-frame",
        "user_id": 70,
        "blog_id": 171
    },
    {
        "comment": "Organic bandwidth-monitored core",
        "user_id": 74,
        "blog_id": 188
    },
    {
        "comment": "Quality-focused context-sensitive archive",
        "user_id": 77,
        "blog_id": 6
    },
    {
        "comment": "Multi-channelled hybrid archive",
        "user_id": 31,
        "blog_id": 63
    },
    {
        "comment": "Organic object-oriented productivity",
        "user_id": 56,
        "blog_id": 35
    },
    {
        "comment": "Devolved uniform frame",
        "user_id": 85,
        "blog_id": 163
    },
    {
        "comment": "Synchronised heuristic customer loyalty",
        "user_id": 43,
        "blog_id": 83
    },
    {
        "comment": "Synergistic motivating project",
        "user_id": 98,
        "blog_id": 12
    },
    {
        "comment": "Proactive incremental core",
        "user_id": 87,
        "blog_id": 111
    },
    {
        "comment": "Operative real-time solution",
        "user_id": 28,
        "blog_id": 19
    },
    {
        "comment": "Compatible background task-force",
        "user_id": 97,
        "blog_id": 172
    },
    {
        "comment": "Seamless dynamic collaboration",
        "user_id": 87,
        "blog_id": 184
    },
    {
        "comment": "Robust zero tolerance utilisation",
        "user_id": 14,
        "blog_id": 131
    },
    {
        "comment": "Multi-tiered directional Graphical User Interface",
        "user_id": 37,
        "blog_id": 162
    },
    {
        "comment": "Synchronised asymmetric function",
        "user_id": 5,
        "blog_id": 172
    },
    {
        "comment": "Configurable high-level archive",
        "user_id": 3,
        "blog_id": 112
    },
    {
        "comment": "Implemented global initiative",
        "user_id": 40,
        "blog_id": 84
    },
    {
        "comment": "Sharable explicit migration",
        "user_id": 24,
        "blog_id": 24
    },
    {
        "comment": "Upgradable zero administration implementation",
        "user_id": 11,
        "blog_id": 119
    },
    {
        "comment": "Configurable 24 hour monitoring",
        "user_id": 57,
        "blog_id": 139
    },
    {
        "comment": "Pre-emptive motivating installation",
        "user_id": 76,
        "blog_id": 41
    },
    {
        "comment": "Automated maximized internet solution",
        "user_id": 17,
        "blog_id": 152
    },
    {
        "comment": "Polarised multi-state internet solution",
        "user_id": 85,
        "blog_id": 163
    },
    {
        "comment": "Expanded secondary architecture",
        "user_id": 55,
        "blog_id": 165
    },
    {
        "comment": "Multi-layered directional secured line",
        "user_id": 80,
        "blog_id": 107
    },
    {
        "comment": "Front-line 24/7 projection",
        "user_id": 70,
        "blog_id": 161
    },
    {
        "comment": "Centralized static synergy",
        "user_id": 69,
        "blog_id": 120
    },
    {
        "comment": "Profound user-facing paradigm",
        "user_id": 28,
        "blog_id": 164
    },
    {
        "comment": "Robust global implementation",
        "user_id": 50,
        "blog_id": 72
    },
    {
        "comment": "Robust 24 hour Graphical User Interface",
        "user_id": 22,
        "blog_id": 57
    },
    {
        "comment": "Inverse human-resource access",
        "user_id": 90,
        "blog_id": 75
    },
    {
        "comment": "Face to face optimizing data-warehouse",
        "user_id": 50,
        "blog_id": 19
    },
    {
        "comment": "Universal methodical core",
        "user_id": 74,
        "blog_id": 185
    },
    {
        "comment": "Team-oriented 5th generation concept",
        "user_id": 43,
        "blog_id": 49
    },
    {
        "comment": "Secured intermediate circuit",
        "user_id": 49,
        "blog_id": 76
    },
    {
        "comment": "Object-based fault-tolerant strategy",
        "user_id": 28,
        "blog_id": 148
    },
    {
        "comment": "Streamlined responsive conglomeration",
        "user_id": 24,
        "blog_id": 80
    },
    {
        "comment": "Persistent user-facing knowledge user",
        "user_id": 10,
        "blog_id": 21
    },
    {
        "comment": "Phased attitude-oriented system engine",
        "user_id": 12,
        "blog_id": 140
    },
    {
        "comment": "Synergized 5th generation monitoring",
        "user_id": 58,
        "blog_id": 191
    },
    {
        "comment": "Expanded user-facing adapter",
        "user_id": 13,
        "blog_id": 46
    },
    {
        "comment": "Stand-alone explicit superstructure",
        "user_id": 18,
        "blog_id": 130
    },
    {
        "comment": "Diverse fresh-thinking application",
        "user_id": 42,
        "blog_id": 160
    },
    {
        "comment": "Quality-focused incremental product",
        "user_id": 83,
        "blog_id": 124
    },
    {
        "comment": "Focused non-volatile hub",
        "user_id": 23,
        "blog_id": 194
    },
    {
        "comment": "Multi-layered dedicated implementation",
        "user_id": 88,
        "blog_id": 113
    },
    {
        "comment": "Organic 5th generation leverage",
        "user_id": 75,
        "blog_id": 46
    },
    {
        "comment": "Fully-configurable high-level Graphical User Interface",
        "user_id": 42,
        "blog_id": 153
    },
    {
        "comment": "Managed real-time access",
        "user_id": 5,
        "blog_id": 104
    }
]


const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;