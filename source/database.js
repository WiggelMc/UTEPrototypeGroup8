const DATABASE = {
    "fuseOptions": {
        isCaseSensitive: false,     // false

        includeScore: true,         // true
        includeMatches: true,       // false

        minMatchCharLength: 1,      // 1
        shouldSort: true,           // true
        findAllMatches: true,       // false

        threshold: 0.6,             // 0.6
        ignoreLocation: true,       // false
        useExtendedSearch: false,   // false

        keys: [
            {
                name: "name",
                weight: 0.9
            },
            {
                name: "tags",
                weight: 0.7
            }
        ]
    },
    "books": [
        {
            "name": "Design Book",
            "tags": [
                "cool",
                "swag",
            ],
            "physicalStatus": {
                "available": true,
                "onLoanUntil": 9 / 17 / 2016,
            },
            "digitalStatus": {
                "available": true
            },
        },
        {
            "name": "Architect Book",
            "tags": [
                "good",
                "swag",
            ],
            "physicalStatus": {
                "available": false,
                "onLoanUntil": 9 / 8 / 2016,
            },
            "digitalStatus": {
                "available": false
            },
        },
        {
            "name": "Trueness of Things",
            "tags": [
                "good",
                "swag",
            ],
            "physicalStatus": {
                "available": false,
                "onLoanUntil": 9 / 8 / 2016,
            },
            "digitalStatus": {
                "available": false
            },
        },
        {
            "name": "Life is normal",
            "tags": [
                "cool",
                "swag",
            ],
            "physicalStatus": {
                "available": false,
                "onLoanUntil": 9 / 8 / 2016,
            },
            "digitalStatus": {
                "available": false
            },
        },
        {
            "name": "Test 15",
            "tags": [
                "good",
                "cool",
            ],
            "physicalStatus": {
                "available": false,
                "onLoanUntil": 9 / 8 / 2016,
            },
            "digitalStatus": {
                "available": false
            },
        },
        {
            "name": "Wall",
            "tags": [
                "good",
                "swag",
            ],
            "physicalStatus": {
                "available": false,
                "onLoanUntil": 9 / 8 / 2016,
            },
            "digitalStatus": {
                "available": false
            },
        },
        {
            "name": "Best Life",
            "tags": [
                "good",
                "swag",
            ],
            "physicalStatus": {
                "available": false,
                "onLoanUntil": 9 / 8 / 2016,
            },
            "digitalStatus": {
                "available": false
            },
        },
        {
            "name": "Life Tips from Frank",
            "tags": [
                "good",
                "swag",
            ],
            "physicalStatus": {
                "available": false,
                "onLoanUntil": 9 / 8 / 2016,
            },
            "digitalStatus": {
                "available": false
            },
        },
        {
            "name": "The Harmony of Laden",
            "tags": [
                "good",
                "Life",
            ],
            "physicalStatus": {
                "available": false,
                "onLoanUntil": 9 / 8 / 2016,
            },
            "digitalStatus": {
                "available": false
            },
        },
    ]
}