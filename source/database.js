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
            id: "0001-2A6571DA26602A67BE14EA8C5AB82349",

            title: "Before the Normans : Southern Italy in the Ninth and Tenth Centuries / Barbara M. Kreutz", //https://eds.s.ebscohost.com/eds/detail/detail?sid=c2c267b8-e9fe-4da8-bbfa-888234642557%40redis&vid=5&bdata=Jmxhbmc9ZGUmc2l0ZT1lZHMtbGl2ZQ%253d%253d&lg=1&bdata=JnNpdGU9ZWRzLWxpdmU%3d#AN=zhb.1658624033&db=cat08832a
            authors: [
                "Kreutz, Barbara M.",
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

            language: "English",
            coverImage: "https://contentcafe2.btol.com/ContentCafe/jacket.aspx?UserID=ebsco-test&Password=ebsco-test&Return=T&Type=M&Value=9780812205435",

            publication: {
                year: 2011,
                location: "Philadelphia, Pa.",
                publisher: "University of Pennsylvania Press",
                type: "Book",
            },
            resources: [
                {
                    physical: false,

                    available: true, // physical-only
                    onLoanUntil: new Date("1970-01-01"), // physical-only

                    url: "https://example.com/", // non-physical-only

                    isbn: "9780812205435",
                    accessionNr: "zhb.1658624033",
                }
            ],
            database: "Katalog der ZHB Flensburg",
        },
        {
            id: "0002-0467633C9723954300CEAFDF24776D8D",

            title: "The Norman conquest in English history : Volume IA broken chain? / George Garnett", //https://eds.p.ebscohost.com/eds/detail/detail?vid=0&sid=5c1566fa-0c88-44f8-86a7-378a75827f83%40redis&bdata=Jmxhbmc9ZGUmc2l0ZT1lZHMtbGl2ZQ%3d%3d#AN=zhb.1747883662&db=cat08832a
            authors: [
                "Garnett, George",
            ],
            tags: [
                "Oxford scholarship online",
            ],
            abstract: [
                "Summary: This first volume of 'The Norman Conquest in English History' pursues a central theme in English historical thinking over seven centuries. Covering more than half a millennium, the volume explains how and why the experience of the Norman Conquest prompted both an unprecedented campaign in the early twelfth century to write (or create) the history of England, and to excavate (and fabricate) pre-Conquest English law. Garnett traces the treatment of the Conquest in English historiography, legal theory and practice, and political argument through the middle ages and early modern period, examining the dispersal of these materials from libraries afer the dissolution of the monasteries, and the attempts made to rescue, edit, and print many of them in the late sixteenth and early seventeenth centuries.",
            ],
            notes: [
                "This edition previously issued in print: 2020. - Includes bibliographical references and index. - Description based on online resource; title from home page (viewed on December 15, 2020)",
            ],

            language: "English",

            publication: {
                year: 2021,
                location: "Oxford",
                publisher: "Oxford University Press",
                type: "Book",
            },
            resources: [
                {
                    physical: false,

                    url: "https://example.com/", // non-physical-only

                    isbn: "9780191793042",
                    accessionNr: "zhb.1747883662",
                }
            ],
            database: "Katalog der ZHB Flensburg",
        },
        {
            id: "0003-0E75294CF26DF5B3B46F5715A92878C1",

            title: "Architect of Justice : Felix S. Cohen and the Founding of American Legal Pluralism / Dalia Tsuk Mitchell", //https://eds.p.ebscohost.com/eds/detail/detail?vid=2&sid=b1b9b816-318b-4237-abba-cd350edc6dc1%40redis&bdata=Jmxhbmc9ZGUmc2l0ZT1lZHMtbGl2ZQ%3d%3d#AN=zhb.1042458405&db=cat08832a
            authors: [
                "Mitchell, Dalia Tsuk",
            ],
            tags: [
                "Indians of North America",
                "Indians of North America -- Legal status, laws, etc",
                "Law teachers",
                "BIOGRAPHY & AUTOBIOGRAPHY / Lawyers & Judges",
                "Legal polycentricity",
                "Legal polycentricity -- United States",
                "Law teachers -- United States -- Biography",
                "eBook-DeGruyter-EBS-2021-2022",
                "E-Book DeGruyter",
            ],
            abstract: [
                "Summary: A major figure in American legal history during the first half of the twentieth century, Felix Solomon Cohen (1907–1953) is best known for his realist view of the law and his efforts to grant Native Americans more control over their own cultural, political, and economic affairs. A second-generation Jewish American, Cohen was born in Manhattan, where he attended the College of the City of New York before receiving a Ph.D. in philosophy from Harvard University and a law degree from Columbia University. Between 1933 and 1948 he served in the Solicitor's Office of the Department of the Interior, where he made lasting contributions to federal Indian law, drafting the Indian Reorganization Act of 1934, the Indian Claims Commission Act of 1946, and, as head of the Indian Law Survey, authoring The Handbook of Federal Indian Law (1941), which promoted the protection of tribal rights and continues to serve as the basis for developments in federal Indian law.In Architect of Justice, Dalia Tsuk Mitchell provides the first intellectual biography of Cohen, whose career and legal philosophy she depicts as being inextricably bound to debates about the place of political, social, and cultural groups within American democracy. Cohen was, she finds, deeply influenced by his own experiences as a Jewish American and discussions within the Jewish community about assimilation and cultural pluralism as well the persecution of European Jews before and during World War II.Dalia Tsuk Mitchell uses Cohen's scholarship and legal work to construct a history of legal pluralism—a tradition in American legal and political thought that has immense relevance to contemporary debates and that has never been examined before. She traces the many ways in which legal pluralism informed New Deal policymaking and demonstrates the importance of Cohen's work on behalf of Native Americans in this context, thus bringing federal Indian law from the margins of American legal history to its center. By following the development of legal pluralism in Cohen's writings, Architect of Justice demonstrates a largely unrecognized continuity in American legal thought between the Progressive Era and ongoing debates about multiculturalism and minority rights today. A landmark work in American legal history, this biography also makes clear the major contribution Felix S. Cohen made to America's legal and political landscape through his scholarship and his service to the American government.",
            ],
            notes: [
                "Frontmatter -- -- CONTENTS -- -- Acknowledgments -- -- Prologue -- -- PART 1: Longing to Belong, 1907-1933 -- -- 1. A Second Generation -- -- 2. Multiple Destinies -- -- PART II: Building a Pluralist State, 1933-1939 -- -- 3. A Time Ripe for Change -- -- 4. Ideals and Compromises -- -- 5. In Flux -- -- PART III: New Frontiers, 1939-1941 -- -- 6. First Americans, Misfits, and Refugees -- -- 7. The Intellectual Equipment of a Generation -- -- PART IV: Re-Mapping the Terrain, 1941-1947 -- -- 8. Property in (Group) Conflict -- -- 9. A Contract with America -- -- PART V: Doubts and Hopes, 1948-1953 -- -- 10. In the Shadows of the Law -- -- Epilogue -- -- Abbreviations -- -- Notes -- -- Selected Bibliography -- -- Index",
                "Anmerkung zum Exemplar : Ausdruck und Kopien sind ausschließlich für den eigenen wissenschaftlichen Gebrauch gestattet",
                "2007",
                "Mode of access: Internet via World Wide Web.",
                "In English",
            ],

            language: "English",

            publication: {
                year: 2018,
                location: "Ithaca, NY",
                publisher: "Cornell University Press",
                type: "Book",
            },
            resources: [
                {
                    physical: false,

                    url: "https://example.com/", // non-physical-only

                    isbn: "9781501717161",
                    accessionNr: "zhb.1042458405",
                }
            ],
            database: "Katalog der ZHB Flensburg",
        },
    ]
}