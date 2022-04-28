const DATABASE = {
    fuseOptions: {
        isCaseSensitive: false,     // false

        includeScore: true,         // true
        includeMatches: true,       // false

        minMatchCharLength: 1,      // 1
        shouldSort: true,           // true
        findAllMatches: false,      // false

        threshold: 0.3,             // 0.6
        ignoreLocation: true,       // false
        useExtendedSearch: false,   // false

        keys: [
            {
                name: "title",
                weight: 0.9
            },
            {
                name: "authors",
                weight: 0.86
            },
            {
                name: "tags",
                weight: 0.8
            },
            {
                name: "abstract",
                weight: 0.5
            },
            {
                name: "notes",
                weight: 0.5
            },
        ]
    },
    books: [
        {
            id: "3D78CA30DBE24AB35F87E4B48E034BAC",
            title: "Before the Normans : Southern Italy in the Ninth and Tenth Centuries / Barbara M. Kreutz",
            series: "The Middle Ages Series",
            lang: "English",
            authors: [
                "Kreutz, Barbara M., VerfasserIn",
            ],
            tags: [
                "eBook-DeGruyter-EBS-2021-2022",
                "E-Book DeGruyter",
            ],
            abstract: [
                "Summary: Kreutz writes the first modern study in English of the land, political structures, and cultures of southern Italy in the two centuries before the Norman conquest.",
                "Summary: Biographical note: Barbara M. Kreutz was Dean Emeritus of the Graduate School of Arts and Sciences of Bryn Mawr College.",
            ],
            notes: [
                "Anmerkung zum Exemplar : Ausdruck und Kopien sind ausschließlich für den eigenen wissenschaftlichen Gebrauch gestattet",
                "1992",
            ],
            publicationInfo: "Philadelphia, Pa. University of Pennsylvania Press, 2011",
            releaseYear: "2011",
            releaseType: "Book",
            documentType: "Online",
            medium: "Online-Ressource (268 S.)",
            isbn: [
                "9780812205435",
            ],
            accessionNr: "zhb.1658624033",
            rating: 5,
            availableEbook: 1,
            availableRent: 1,
            rentDelay: 20,
            availableThere: 1,
            cover: "https://contentcafe2.btol.com/ContentCafe/jacket.aspx?UserID=ebsco-test&Password=ebsco-test&Return=T&Type=M&Value=9780812205435",
        },
        {
            id: "6FA397B039F1FEC5DEFFF3B4146AE04C",
            title: "Usability engineering / Jakob Nielsen",
            lang: "English",
            authors: [
                "Nielsen, Jakob, 1957-, VerfasserIn",
            ],
            notes: [
                "Archivierung/Langzeitarchivierung gewährleistet PEBW DE-31 pdager",
                "ST 280:L1UBME",
            ],
            publicationInfo: "Amsterdam Heidelberg [u.a.] Kaufmann, 2008",
            releaseYear: "2008",
            releaseType: "Book",
            documentType: "Book",
            medium: "XIV, 362 S. graph. Darst.",
            isbn: [
                "9780125184069",
                "0125184069",
                "9780080520292",
            ],
            accessionNr: "zhb.617526206",
            rating: 2,
            availableEbook: 1,
            availableRent: 2,
            rentDelay: 12,
            availableThere: 1,
        },
        {
            id: "2DF6F8D7C6F59076957B51EC0C447DEA",
            title: "Universal usability : designing computer interfaces for diverse user populations / ed. by Jonathan Lazar",
            lang: "English",
            tags: [
                "User interfaces (Computer systems)",
                "Aufsatzsammlung",
            ],
            notes: [
                "Includes bibliographical references and index",
                "Archivierung prüfen 20200919 DE-640 2 pdager",
            ],
            publicationInfo: "Hoboken, NJ Wiley, 2007",
            releaseYear: "2007",
            releaseType: "Book",
            documentType: "Book",
            medium: "XVI, 610 S. Ill., graph. Darst. 24 cm",
            isbn: [
                "9780470027271",
                "0470027274",
            ],
            accessionNr: "zhb.524368228",
            rating: 4,
            availableEbook: 1,
            availableRent: 1,
            rentDelay: 29,
            availableThere: 1,
        },
        {
            id: "D5D801468873312C1E76A7E71F0F7F8",
            title: "An Anglo-Norman reader / Jane Bliss",
            lang: "English",
            tags: [
                "LITERARY COLLECTIONS ; Medieval",
                "Literary studies: classical, early and medieval",
                "Anglo-Norman literature",
                "Translations",
                "Criticism, interpretation, etc",
                "Translation and interpretation",
                "Anglo-Norman literature -- Translations into English",
                "Anthologies (non-poetry)",
                "Anglo-Norman literature -- History and criticism",
                "eBook JSTOR",
            ],
            abstract: [
                "Summary: \"This book is an anthology with a difference. It presents a distinctive variety of Anglo-Norman works, beginning in the twelfth century and ending in the nineteenth, covering a broad range of genres and writers, introduced in a lively and thought-provoking way. Facing-page translations, into accessible and engaging modern English, are provided throughout, bringing these texts to life for a contemporary audience. The collection offers a selection of fascinating passages, and whole texts, many of which are not anthologised or translated anywhere else. It explores little-known byways of Arthurian legend and stories of real-life crime and punishment; women's voices tell history, write letters, berate pagans; advice is offered on how to win friends and influence people, how to cure people's ailments and how to keep clear of the law; and stories from the Bible are retold with commentary, together with guidance on prayer and confession. Each text is introduced and elucidated with notes and full references, and the material is divided into three main sections: Story (a variety of narrative forms), Miscellany (including letters, law and medicine, and other non-fiction), and Religious (saints' lives, sermons, Bible commentary, and prayers). Passages in one genre have been chosen so as to reflect themes or stories that appear in another, so that the book can be enjoyed as a collection or used as a resource to dip into for selected texts. This anthology is essential reading for students and scholars of Anglo-Norman and medieval literature and culture. Wide-ranging and fully referenced, it can be used as a springboard for further study or relished in its own right by readers interested to discover Anglo-Norman literature that was written to amuse, instruct, entertain, or admonish medieval audiences.\"--Publisher's website",
            ],
            notes: [
                "Anmerkung zum Exemplar ebook: JSTOR Open Access Book",
                "Includes bibliographical references (pages 379-394) and indexes",
                "Available through Open Book Publishers",
                "Texts in Anglo-Norman with English translation; introduction and editorial matter in English",
            ],
            publicationInfo: "Cambridge Open Book Publishers, 2018",
            releaseYear: "2018",
            releaseType: "Book",
            documentType: "Online",
            medium: "1 Online-Ressource (1 volume)",
            isbn: [
                "9781783743148",
                "9781783743131",
                "1783743158",
                "9781783743155",
                "9781783743179",
                "9781783743162",
                "1783743174",
                "1783743166",
            ],
            accessionNr: "zhb.1066604665",
            rating: 2,
            availableEbook: 1,
            availableRent: 0,
            rentDelay: 22,
            availableThere: 1,
        },
        {
            id: "47598BA8A752FBABB32E7FE32CF2F13F",
            title: "Handbook of usability testing : how to plan, design, and conduct effective tests / Jeff Rubin; Dana Chisnell",
            lang: "English",
            authors: [
                "Rubin, Jeffrey, 1949-, VerfasserIn",
            ],
            tags: [
                "User interfaces (Computer systems) -- Testing",
                "Softwareengineering",
            ],
            notes: [
                "Literaturangaben",
            ],
            publicationInfo: "Indianapolis, Ind. Wiley, 2008",
            releaseYear: "2008",
            releaseType: "Book",
            documentType: "Book",
            medium: "XXXVI, 348 S. Ill., graph. Darst.",
            isbn: [
                "9780470185483",
                "04703860889780470386088",
                "9780470386088",
                "97804701854830470185481",
            ],
            accessionNr: "zhb.560716001",
            rating: 5,
            availableEbook: 0,
            availableRent: 1,
            rentDelay: 20,
            availableThere: 0,
        },
        {
            id: "6FBAC9E89E09A0655D904E490A2FCAD8",
            title: "Healthcare Interoperability Standards Compliance Handbook : Conformance and Testing of Healthcare Data Exchange Standards",
            series: "2016 Springer EBA Collection",
            authors: [
                "Frank Oemig",
                "Robert Snelick",
            ],
            publicationInfo: "Cham : Springer. 2016",
            accessionNr: "1302178",
            rating: 1,
            availableEbook: 0,
            availableRent: 0,
            rentDelay: 1,
            availableThere: 0,
        },
        {
            id: "24B3AB35087F84C4EC5A34FE4FC98673",
            title: "Handbook of Narrative Analysis",
            series: "Frontiers of Narrative",
            authors: [
                "Luc Herman",
                "Bart Vervaeck",
            ],
            publicationInfo: "Ed.: Second edition. Lincoln : University of Nebraska Press. 2019",
            accessionNr: "2275179",
            rating: 3,
            availableEbook: 1,
            availableRent: 1,
            rentDelay: 23,
            availableThere: 1,
        },
        {
            id: "63609137AC4C8D667066AEB25F1843B4",
            title: "The Palgrave Handbook of the Southern Gothic",
            series: "Palgrave Handbooks",
            authors: [
                "Susan Castillo Street",
                "Charles L. Crow",
            ],
            publicationInfo: "[London] : Palgrave Macmillan. 2016",
            accessionNr: "1333849",
            rating: 3,
            availableEbook: 0,
            availableRent: 2,
            rentDelay: 3,
            availableThere: 0,
        },
        {
            id: "FD2115A895FA22074A228CE743A935C1",
            title: "Basiswissen Softwaretest : Aus- und Weiterbildung zum Certified Tester – Foundation Level nach ISTQB®-Standard",
            series: "iSQI-Reihe",
            lang: "German",
            authors: [
                "Andreas Spillner",
                "Tilo Linz",
            ],
            publicationInfo: "Ed.: 6., überarbeitete und aktualisierte Auflage. Heidelberg : dpunkt.verlag. 2019",
            accessionNr: "2151604",
            rating: 3,
            availableEbook: 0,
            availableRent: 2,
            rentDelay: 3,
            availableThere: 0,
        },
        {
            id: "C2F9D6E129E4E4DFE662EEDE748C9CFC",
            title: "Fuel Cell Science and Engineering, 2 Volume Set : Materials, Processes, Systems and Technology",
            authors: [
                "Detlef Stolten",
                "Bernd Emonts",
            ],
            publicationInfo: "Hoboken : Wiley-VCH. 2012",
            accessionNr: "458186",
            rating: 1,
            availableEbook: 1,
            availableRent: 1,
            rentDelay: 26,
            availableThere: 1,
        },
        {
            id: "1C5AD45A95FE0CA75EC840EF6BCC8B3C",
            title: "Cross cultural usability testing of MOOC platform",
            lang: "English",
            authors: [
                "Selmanovic, Dzenan",
                "Sayar, Ahmet",
                "Durdu, Pinar O.",
            ],
            tags: [
                "Communication, Networking and Broadcast Technologies",
                "Computing and Processing",
                "Engineered Materials, Dielectrics and Plasmas",
                "Engineering Profession",
                "Photonics and Electrooptics",
                "Power, Energy and Industry Applications",
                "Robotics and Control Systems",
                "Signal Processing and Analysis",
                "Computer aided instruction",
                "Electronic learning",
                "Atmospheric measurements",
                "Particle measurements",
                "Time measurement",
                "Cultural differences",
                "Web sites",
                "MOOC platform usability",
                "Udemy",
                "usability of website",
                "cross-cultural usability evaluation",
                "WAMMI",
            ],
            notes: [
                "Conference Location: Ankara, Turkey, Turkey",
                "Conference Start Date: 21 Oct. 2021",
                "Conference End Date: 23 Oct. 2021",
            ],
            documentType: "Conference",
            isbn: [
                "978-1-6654-4930-4",
            ],
            accessionNr: "edseee.9604673",
            rating: 5,
            availableEbook: 0,
            availableRent: 1,
            rentDelay: 20,
            availableThere: 0,
        },


    ]
}