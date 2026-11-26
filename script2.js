/* =========================================================================
   PROJECTS DATA
   ========================================================================= */
const projects = [
    {
        id: "arduino-prototype",
        title: "Project Daredevil",
        category: "Electronics",
        timeline: "Hardware & Embedded",
        image: "Project images/dd product2.png",
        description: "Microcontroller based aid system for the visually impaired, featuring real-time environmental sensing, facial recognition and automated actuator responses.",
        overview: "Developed a functional prototype of a wearable device that assists visually impaired users in navigating their environment safely. The system integrates multiple sensors, including ultrasonic and lidar, to detect obstacles and provide haptic feedback. Additionally, it incorporates facial recognition technology to identify familiar faces and alert the user accordingly.",
        features: [
            "Multi-sensor integration for obstacle detection and facial recognition",
            "Real-time haptic feedback for user alerts",
            "Compact and wearable design for ease of use",
            "Custom programme for facial recognition and environmental sensing using Arduino and Python"
        ],
        learnings: "Enhanced skills in embedded systems, sensor interfacing, and real-time data processing. Gained experience in integrating hardware and software components to create a cohesive assistive technology solution.",
        tags: ["Arduino", "Python", "Embedded Systems"],
        link: ""
    },
    {
        id: "quiz-buzzer-system",
        title: "Quiz Programme Buzzer System",
        category: "Electronics",
        timeline: "Arduino & Embedded Systems",
        image: "Project images/Buzzer.png",
        description: "An Arduino-based buzzer system that identifies which of four contestants presses first and signals the host with indicator LEDs.",
        overview: "Built a buzzer system for a quiz programme using an Arduino and four contestant buttons. The software records the first contestant to buzz, lights the LED on that buzzer and the matching indicator on the main system, and lets the host reset the system after each round.",
        features: [
            "Accepts buzzer input from four contestants",
            "Determines and locks in the first contestant to press",
            "Lights the winner's buzzer LED and the corresponding LED on the main system",
            "Allows the host to reset the buzzer system after each round"
        ],
        learnings: "Applied Arduino programming to read multiple contestant inputs, identify the first press, control indicator LEDs, and reset the system between rounds.",
        tags: ["Arduino", "Embedded Systems", "Buzzer System", "LED Indicators"],
        link: ""
    },
    {
        id: "python-automation",
        title: "Python-to-Serial Face Tracking",
        category: "Programming",
        timeline: "Computer Vision & Embedded Systems",
        image: "Project images/Face traker.png",
        description: "A webcam-based face-tracking system that sends position data from Python to an Arduino, which moves two servos to follow the face on a pan-and-tilt mount.",
        overview: "Created a Python script that uses a webcam to track a person's face and sends the tracking data to an Arduino over a serial connection. The Arduino uses the incoming data to control two servos in a pan-and-tilt configuration, turning the mounted setup to follow the face.",
        features: [
            "Tracks a human face from a live webcam feed",
            "Transmits face-position data from Python to an Arduino over serial",
            "Controls two servos to pan and tilt the camera mount toward the face",
            "Connects computer vision, serial communication, and physical motion in one prototype"
        ],
        learnings: "Practised connecting a Python-based vision workflow to Arduino hardware, sending data reliably over serial, and translating tracking input into coordinated two-servo movement.",
        tags: ["Python", "Arduino", "Serial Communication", "Face Tracking", "Servo Control"],
        link: ""
    },
    {
        id: "music-artist-website",
        title: "Dasun Lelwala Music Website",
        category: "Web",
        timeline: "Hand-Coded Web Development",
        image: "Project images/music-website-homepage.png",
        description: "A hand-coded music website that brings together artist information, new releases, streaming platforms, and contact details.",
        overview: "Built a website for music artist Dasun Lelwala, with a home section introducing the artist, links to streaming platforms, release artwork linked to Spotify, and an embedded Spotify player. The site also includes social media links and a contact section.",
        features: [
            "Artist landing page with navigation to home, releases, and contact sections",
            "Streaming links for Spotify, SoundCloud, and Amazon Music",
            "Featured release artwork linked to Spotify and an embedded Spotify player",
            "Social media links and a contact form"
        ],
        learnings: "Practised building a complete promotional website by hand and bringing together page navigation, music embeds, external streaming links, and contact information.",
        tags: ["Web Development", "Music", "UI Design"],
        link: "https://dasun-lelwala.github.io/Music/"
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
            { label: "Arduino / ESP32", muted: false },
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
            { label: "Arduino Code", muted: true }
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

/* =========================================================================
   GRAPHIC DESIGN DATA
   ========================================================================= */
const graphicDesigns = [
    {
        title: "Luxury Watch Campaign",
        type: "Campaign Artwork",
        image: "Graphic Designs/Gradient project.png",
        width: 1080,
        height: 1350,
        alt: "Luxury watch campaign poster with an elegant monochrome watch composition"
    },
    {
        title: "Acoustic Unlisted — Follow Us",
        type: "Social Media",
        image: "Graphic Designs/follow us.png",
        width: 1080,
        height: 1350,
        alt: "Red and black Acoustic Unlisted social media follow-us graphic"
    },
    {
        title: "Acoustic Unlisted — Wordmark",
        type: "Visual Identity",
        image: "Graphic Designs/Acoustic Unlisted.png",
        width: 1080,
        height: 1080,
        alt: "Acoustic Unlisted wordmark in white and red on a dark background"
    },
    {
        title: "2 Days Left",
        type: "Event Countdown",
        image: "Graphic Designs/2 days left.png",
        width: 1080,
        height: 1350,
        alt: "Two-days-left countdown promotional design"
    },
    {
        title: "ESAG Annual Cricket Encounter",
        type: "Event Backdrop",
        image: "Graphic Designs/Backdrop - web.jpg",
        width: 2000,
        height: 1600,
        alt: "Large-format ESAG Annual Cricket Encounter backdrop with repeated sponsor branding"
    },
    {
        title: "Thumbnail Design",
        type: "Graphic Design",
        image: "Graphic Designs/Danushka tasjkk.png",
        width: 1280,
        height: 720,
        alt: "Landscape graphic design featuring Danushka"
    },
    {
        title: "Sri Lanka",
        type: "Portrait Design",
        image: "Graphic Designs/Dasun Lelwala - Richmond College.jpg",
        width: 1080,
        height: 1080,
        alt: "Richmond College portrait design for Dasun Lelwala"
    },
    {
        title: "ESAG Trip",
        type: "Event Promotion",
        image: "Graphic Designs/ESAG trip.png",
        width: 1080,
        height: 1080,
        alt: "Promotional design for an ESAG trip"
    },
    {
        title: "ESAG Vesak",
        type: "Festival Artwork",
        image: "Graphic Designs/ESAG vesak.png",
        width: 1080,
        height: 1080,
        alt: "Vesak festival artwork for ESAG"
    },
    {
        title: "Hajj",
        type: "Event Artwork",
        image: "Graphic Designs/Hadjiv4.png",
        width: 1080,
        height: 1080,
        alt: "Hajj event promotional artwork"
    },
    {
        title: "Luminate",
        type: "Event Artwork",
        image: "Graphic Designs/luminate.png",
        width: 3000,
        height: 2000,
        alt: "Luminate event graphic design"
    },
    {
        title: "Poson",
        type: "Festival Artwork",
        image: "Graphic Designs/Poson.png",
        width: 1080,
        height: 1080,
        alt: "Poson festival graphic design"
    },
    {
        title: "Poster — Square",
        type: "Poster Design",
        image: "Graphic Designs/Poster1x1.png",
        width: 1080,
        height: 1080,
        alt: "Square poster design"
    },
    {
        title: "Poster — Portrait",
        type: "Poster Design",
        image: "Graphic Designs/Poster4x5.png",
        width: 1080,
        height: 1350,
        alt: "Portrait poster design"
    },
    {
        title: "Pre-order Advertisement",
        type: "Product Promotion",
        image: "Graphic Designs/preorder adv.png",
        width: 1080,
        height: 1350,
        alt: "Product pre-order promotional design"
    },
    {
        title: "Quiz Results",
        type: "Social Media Graphic",
        image: "Graphic Designs/Quiz resultsv6rcg.jpg",
        width: 1080,
        height: 1080,
        alt: "Quiz results graphic for Richmond College"
    },
    {
        title: "Richmond College T-shirt",
        type: "Apparel Design",
        image: "Graphic Designs/RCPS T-Shirt.png",
        width: 4000,
        height: 4000,
        alt: "T-shirt design for Richmond College"
    },
    {
        title: "Richmond Live Family League",
        type: "Event Artwork",
        image: "Graphic Designs/Richmond Live Family League v2.png",
        width: 1080,
        height: 1080,
        alt: "Richmond Live Family League event graphic"
    },
    {
        title: "School Day 147",
        type: "Anniversary Artwork",
        image: "Graphic Designs/Scl day 147 v2.jpg",
        width: 1080,
        height: 1080,
        alt: "School Day 147 anniversary design"
    },
    {
        title: "School Day 147",
        type: "Anniversary Artwork",
        image: "Graphic Designs/sclday147v3.jpg",
        width: 1080,
        height: 1080,
        alt: "School Day 147 anniversary design"
    },
    {
        title: "Video Thumbnail",
        type: "Thumbnail Design",
        image: "Graphic Designs/tumb.png",
        width: 1920,
        height: 1080,
        alt: "Landscape video thumbnail design"
    },
    {
        title: "Voice",
        type: "Campaign Artwork",
        image: "Graphic Designs/Voice5.jpg",
        width: 1080,
        height: 1080,
        alt: "Voice campaign graphic design"
    },
    {
        title: "Wesak 2023",
        type: "Festival Artwork",
        image: "Graphic Designs/wesak '23.jpg",
        width: 1080,
        height: 1080,
        alt: "Wesak festival design from 2023"
    }
];