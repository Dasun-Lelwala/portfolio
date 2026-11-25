/* =========================================================================
   PROJECTS DATA
   ========================================================================= */
const projects = [
    {
        id: "arduino-prototype",
        title: "Arduino Hardware Prototype",
        category: "Electronics",
        timeline: "Hardware & Embedded",
        image: "https://placehold.co/900x450/101d35/38bdf8?text=Arduino+Hardware+Prototype+%28Add+Photo+Later%29",
        description: "Sample template: Microcontroller-based sensor monitoring and actuator control project written in Arduino code.",
        overview: "Designed and programmed a microcontroller-based embedded system capable of reading real-time environmental sensor data and triggering automated actuator responses with low latency.",
        features: [
            "Custom sensor calibration and noise filtering in Arduino C/C++",
            "Real-time serial telemetry output for live monitoring",
            "Modular breadboard-to-enclosure circuit layout"
        ],
        learnings: "Strengthened practical understanding of microcontroller pin interfacing, analog-to-digital conversion, and power management for hardware components.",
        tags: ["Arduino Code", "Sensors", "Hardware"],
        link: ""
    },
    {
        id: "python-automation",
        title: "Python Automation & Logic Script",
        category: "Programming",
        timeline: "Software Utility",
        image: "https://placehold.co/900x450/101d35/38bdf8?text=Python+Engineering+Script+%28Add+Screenshot+Later%29",
        description: "Sample template: Python utility developed to process data and solve engineering calculations.",
        overview: "Built a structured Python utility to automate repetitive numerical computations and parse experimental datasets cleanly into readable summaries.",
        features: [
            "Clean modular functions for mathematical and engineering formulas",
            "Automated input validation and structured file output",
            "Lightweight command-line workflow"
        ],
        learnings: "Improved algorithmic problem-solving and clean code structuring in Python for faster engineering analysis.",
        tags: ["Python", "Problem Solving"],
        link: ""
    },
    {
        id: "personal-portfolio",
        title: "Personal Portfolio Website",
        category: "Web",
        timeline: "Web Development",
        image: "https://placehold.co/900x450/101d35/2dd4bf?text=Personal+Portfolio+Website",
        description: "Responsive portfolio website built with HTML, CSS, and JavaScript to showcase projects and skills.",
        overview: "Created a dark, atmospheric portfolio website featuring interactive section tracking, dynamic category filtering, and dedicated project overview sheets.",
        features: [
            "Responsive layout engineered for mobile, tablet, and desktop screens",
            "Interactive category filtering and detailed project case-study views",
            "Subtle dark blocks with hairline dividers and cerulean accents"
        ],
        learnings: "Applied core HTML, CSS, and JavaScript DOM manipulation concepts to craft a distraction-free user interface.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: ""
    }
];

/* =========================================================================
   SKILLS DATA
   ========================================================================= */
const skills = [
    {
        id: "arduino-electronics",
        group: "core",
        icon: "fa-microchip",
        theme: "cerulean",
        badge: "Focus #1",
        title: "Arduino & Electronics",
        description: "Microcontroller programming, sensor interfacing, circuit prototyping, and hands-on hardware control systems.",
        chips: [
            { label: "Arduino Code", muted: false },
            { label: "Sensors & Circuits", muted: true }
        ]
    },
    {
        id: "programming",
        group: "core",
        icon: "fa-terminal",
        theme: "cerulean",
        badge: "Focus #2",
        title: "Programming",
        description: "Writing clean scripts, logical routines, and practical tools for engineering problem-solving and automation.",
        chips: [
            { label: "Python", muted: false },
            { label: "Arduino C/C++", muted: true }
        ]
    },
    {
        id: "web-development",
        group: "core",
        icon: "fa-code",
        theme: "teal",
        badge: "Focus #3",
        title: "Web Development",
        description: "Structuring, styling, and adding interactive behaviours to responsive websites from the ground up.",
        chips: [
            { label: "HTML", muted: false },
            { label: "CSS", muted: false },
            { label: "JavaScript (Basics)", muted: true }
        ]
    },
    {
        id: "graphic-design-3d",
        group: "creative",
        icon: "fa-cube",
        theme: "cerulean",
        badge: "Creative",
        title: "Graphic Design & 3D",
        description: "Digital visual editing, graphic layouts, and foundational 3D modeling and rendering.",
        chips: [
            { label: "Photoshop", muted: false },
            { label: "Blender (Basics)", muted: true }
        ]
    },
    {
        id: "music",
        group: "creative",
        icon: "fa-music",
        theme: "teal",
        badge: "Hobby",
        title: "Music",
        description: "Exploring rhythm, melody, and musical creativity alongside analytical engineering studies.",
        chips: []
    }
];

/* =========================================================================
   ACHIEVEMENTS & EXTRACURRICULARS DATA
   ========================================================================= */
// Order entries by significance, not by date. Use year for achievements and
// period for leadership roles (for example, "2023–2025").
const recordCategories = [
    {
        number: "01",
        title: "Awards & Academic Recognition",
        description: "Competition awards and academic distinctions, ordered by significance.",
        entries: [
            {
                icon: "fa-trophy",
                theme: "ochre",
                year: "A/L",
                title: "G.C.E. Advanced Level Distinction",
                detail: "Scored 3 As in the Physical Science stream at Richmond College with a Z-score of 2.5490.",
                meta: "Z-Score: 2.5490 • 3 As"
            },
            {
                icon: "fa-trophy",
                theme: "ochre",
                year: "2022",
                title: "SLASSCOM Ingenuity Awards",
                detail: "Won Southern Province Best Innovative Product/Project in the School Category.",
                meta: "Project Daredevil"
            },
            {
                icon: "fa-star",
                theme: "neutral",
                year: "2025",
                title: "Sri Lanka Physics Olympiad",
                detail: "Awarded the Merit Prize in the Physics Olympiad 2025 organised by the Institute of Physics, Sri Lanka.",
                meta: "Merit Prize"
            },
            {
                icon: "fa-star",
                theme: "neutral",
                year: "2023",
                title: "National Mathematics Olympiad",
                detail: "Selected to the Southern Province pool and participated in the National Mathematics Olympiad Competition in Category III.",
                meta: "Southern Province Pool • Cat III"
            }
            ,
            {
                icon: "fa-trophy",
                theme: "ochre",
                year: "2022",
                title: "Macfair International",
                detail: "Won 1st place in the science drama category at the Macfair International competition",
                meta: "Science drama 1st • Lucknow, India"
            }
            ,
            {
                icon: "fa-trophy",
                theme: "ochre",
                year: "2022 & 2023",
                title: "1st Place Senior Western Choir Boys A2",
                detail: "Won 1st place at the Senior Western Choir Boys A2 category at the All Island Music Competition for two consecutive years with Richmond College Senior Western Choir.",
                meta: "1st Place • All Island Music Competition"
            }
            ,
            {
                icon: "fa-star",
                theme: "neutral",
                year: "2014 - 2019",
                title: "Trinity Spoken English Exams",
                detail: "Passed Trinity College London Spoken English Exams from Initial to Level 3.",
                meta: "Trinity College London • Spoken English"
            },
            {
                icon: "fa-star",
                theme: "neutral",
                year: "2013 - 2018",
                title: "IEMS Spoken English Exams",
                detail: "Passed IEMS Spoken English Exams",
                meta: "IEMS • Spoken English"
            },
            {
                icon: "fa-star",
                theme: "neutral",
                year: "2012 - 2016",
                title: "ABRSM Music Exams",
                detail: "Passed ABRSM Music Exams from Initial to Grade 2 in Piano.",
                meta: "ABRSM • Piano"
            }
            ,
            {
                icon: "fa-star",
                theme: "neutral",
                year: "2018 - 2024",
                title: "Media Competitions",
                detail: "Competed in various media competitions in the categories of Announccing, Editing and Graphic Designing. Won several awards and recognition for the work including 1st place in the graphic designing categoroy at Abiman'23",
                meta: "Media Competitions • Announcing, Editing, Graphic Designing"
            }
            
        ]
    },
    {
        number: "02",
        title: "University & School",
        description: "Extracurricular activities and background.",
        entries: [
            {
                icon: "fa-microphone",
                theme: "cerulean",
                year: "2017 - 2024",
                title: "Media Unit",
                detail: "Worked and learned as a memeber of the Richmond College Media Unit, participating in announcing, editing, and graphic designing for school events and competitions.",
                meta: "Member"
            },
            {
                icon: "fa-video-camera",
                theme: "maroon",
                year: "2023 - 2025",
                title: "Richmond Live",
                detail: "Served as a member of the Richmond Live team, contributing to live streaming and media coverage of the Lovers' Quarrel between Richmond College and Mahinda College.",
                meta: "Member"
            },
            {
                icon: "fa-music",
                theme: "teal",
                year: "2020 - 2024",
                title: "Richmond College Senior Western Choir",
                detail: "Participated as a member of the Richmond College Senior Western Choir, performing in various competitions and events, including winning 1st place in the Senior Western Choir Boys A2 category at the All Island Music Competition for two consecutive years.",
                meta: "Member"
            },
            {
                icon: "fa-building-columns",
                theme: "cerulean",
                year: "2023",
                title: "Richmond UNESCO",
                detail: "Was a founding member of the Richmond UNESCO club, contributing to the establishment and activities of the club.",
                meta: "Assistant Secretary"
            }
            
        ]
    }
];

/* =========================================================================
   FEATURED ACHIEVEMENTS DATA
   ========================================================================= */
const achievements = recordCategories[0].entries.slice(0, 3).map(entry => ({
    icon: entry.icon,
    theme: entry.theme,
    badge: entry.year || "Milestone",
    title: entry.title,
    description: entry.detail,
    footer: entry.meta
}));