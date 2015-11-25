var WWE = WWE || {};

WWE.config = {
    months: [
        {id: 1, text: 'January'},
        {id: 2, text: 'February'},
        {id: 3, text: 'March'},
        {id: 4, text: 'April'},
        {id: 5, text: 'May'},
        {id: 6, text: 'June'},
        {id: 7, text: 'July'},
        {id: 8, text: 'August'},
        {id: 9, text: 'September'},
        {id: 10, text: 'October'},
        {id: 11, text: 'November'},
        {id: 12, text: 'December'}
    ],
    wrestlers: [
        {
            "id": 1,
            "name": "Adam Rose"
        },
        {
            "id": 2,
            "name": "Aiden English"
        },
        {
            "id": 3,
            "name": "AJ Lee"
        },
        {
            "id": 4,
            "name": "Alberto del Rio"
        },
        {
            "id": 5,
            "name": "Alicia Fox"
        },
        {
            "id": 6,
            "name": "Andre the Giant"
        },
        {
            "id": 7,
            "name": "Apollo Crews"
        },
        {
            "id": 8,
            "name": "Bad News Barrett"
        },
        {
            "id": 9,
            "name": "Bam Bam Bigelow"
        },
        {
            "id": 10,
            "name": "Baron Corbin"
        },
        {
            "id": 11,
            "name": "Batista"
        },
        {
            "id": 12,
            "name": "Big E"
        },
        {
            "id": 13,
            "name": "Big Show"
        },
        {
            "id": 14,
            "name": "Billy Gunn"
        },
        {
            "id": 15,
            "name": "Bo Dallas"
        },
        {
            "id": 16,
            "name": "Booker T"
        },
        {
            "id": 17,
            "name": "Braun Strowman"
        },
        {
            "id": 18,
            "name": "Bray Wyatt"
        },
        {
            "id": 19,
            "name": "Bret \"Hit Man\" Hart"
        },
        {
            "id": 20,
            "name": "Brian Pillman"
        },
        {
            "id": 21,
            "name": "Brie Bella"
        },
        {
            "id": 22,
            "name": "British Bulldog"
        },
        {
            "id": 23,
            "name": "Brock Lesnar"
        },
        {
            "id": 24,
            "name": "Cactus Jack"
        },
        {
            "id": 25,
            "name": "Cameron"
        },
        {
            "id": 26,
            "name": "Cesaro"
        },
        {
            "id": 27,
            "name": "Charlotte"
        },
        {
            "id": 28,
            "name": "Chris Jericho"
        },
        {
            "id": 29,
            "name": "Christian"
        },
        {
            "id": 30,
            "name": "CM Punk"
        },
        {
            "id": 31,
            "name": "Colin Cassady"
        },
        {
            "id": 32,
            "name": "Colonel Mustafa"
        },
        {
            "id": 33,
            "name": "Curtis Axel"
        },
        {
            "id": 34,
            "name": "D-Lo Brown"
        },
        {
            "id": 35,
            "name": "Damien Sandow"
        },
        {
            "id": 36,
            "name": "Daniel Bryan"
        },
        {
            "id": 37,
            "name": "Darren Young"
        },
        {
            "id": 38,
            "name": "Dean Ambrose"
        },
        {
            "id": 39,
            "name": "Diamond Dallas Page"
        },
        {
            "id": 40,
            "name": "Dolph Ziggler"
        },
        {
            "id": 41,
            "name": "Dude Love"
        },
        {
            "id": 42,
            "name": "Eddie Guerrero"
        },
        {
            "id": 43,
            "name": "Edge"
        },
        {
            "id": 44,
            "name": "Emma"
        },
        {
            "id": 45,
            "name": "Enzo Amore"
        },
        {
            "id": 46,
            "name": "Erick Rowan"
        },
        {
            "id": 47,
            "name": "Eva Marie"
        },
        {
            "id": 48,
            "name": "Faarooq"
        },
        {
            "id": 49,
            "name": "Fandango"
        },
        {
            "id": 50,
            "name": "Finn Bálor"
        },
        {
            "id": 51,
            "name": "Fit Finlay"
        },
        {
            "id": 52,
            "name": "General Adnan"
        },
        {
            "id": 53,
            "name": "Goldust"
        },
        {
            "id": 54,
            "name": "Haku"
        },
        {
            "id": 55,
            "name": "Heath Slater"
        },
        {
            "id": 56,
            "name": "Hideo Itami"
        },
        {
            "id": 57,
            "name": "Honky Tonk Man"
        },
        {
            "id": 58,
            "name": "Jack Swagger"
        },
        {
            "id": 59,
            "name": "Jake \"The Snake\" Roberts"
        },
        {
            "id": 60,
            "name": "JBL"
        },
        {
            "id": 61,
            "name": "Jey Uso"
        },
        {
            "id": 62,
            "name": "Jim \"The Anvil\" Neidhart"
        },
        {
            "id": 63,
            "name": "Jimmy Fletcher"
        },
        {
            "id": 64,
            "name": "Jimmy Uso"
        },
        {
            "id": 65,
            "name": "John Cena"
        },
        {
            "id": 66,
            "name": "Kalisto"
        },
        {
            "id": 67,
            "name": "Kama"
        },
        {
            "id": 68,
            "name": "Kane"
        },
        {
            "id": 69,
            "name": "Ken Shamrock"
        },
        {
            "id": 70,
            "name": "Kevin Nash"
        },
        {
            "id": 71,
            "name": "Kevin Owens"
        },
        {
            "id": 72,
            "name": "Kofi Kingston"
        },
        {
            "id": 73,
            "name": "Konnor"
        },
        {
            "id": 74,
            "name": "Layla"
        },
        {
            "id": 75,
            "name": "Lex Luger"
        },
        {
            "id": 76,
            "name": "Lord Steven Regal"
        },
        {
            "id": 77,
            "name": "Luke Harper"
        },
        {
            "id": 78,
            "name": "Mankind"
        },
        {
            "id": 79,
            "name": "Mark Henry"
        },
        {
            "id": 80,
            "name": "Mikey Whipwreck"
        },
        {
            "id": 81,
            "name": "Miz"
        },
        {
            "id": 82,
            "name": "Mr. McMahon"
        },
        {
            "id": 83,
            "name": "Naomi"
        },
        {
            "id": 84,
            "name": "Natalya"
        },
        {
            "id": 85,
            "name": "Neville"
        },
        {
            "id": 86,
            "name": "Nikki Bella"
        },
        {
            "id": 87,
            "name": "Owen Hart"
        },
        {
            "id": 88,
            "name": "Paige"
        },
        {
            "id": 89,
            "name": "R-Truth"
        },
        {
            "id": 90,
            "name": "Randy Orton"
        },
        {
            "id": 91,
            "name": "Macho Man Randy Savage"
        },
        {
            "id": 92,
            "name": "Ravishing Rick Rude"
        },
        {
            "id": 93,
            "name": "Ric Flair"
        },
        {
            "id": 94,
            "name": "Ricky Steamboat"
        },
        {
            "id": 95,
            "name": "Rikishi"
        },
        {
            "id": 96,
            "name": "Rock"
        },
        {
            "id": 97,
            "name": "Roman Reigns"
        },
        {
            "id": 98,
            "name": "Rusev"
        },
        {
            "id": 99,
            "name": "Ryback"
        },
        {
            "id": 100,
            "name": "Sami Zayn"
        },
        {
            "id": 101,
            "name": "Santino Marella"
        },
        {
            "id": 102,
            "name": "Sasha Banks"
        },
        {
            "id": 103,
            "name": "Savio Vega"
        },
        {
            "id": 104,
            "name": "Seth Rollins"
        },
        {
            "id": 105,
            "name": "Sgt. Slaughter"
        },
        {
            "id": 106,
            "name": "Shane McMahon"
        },
        {
            "id": 107,
            "name": "Shawn Michaels"
        },
        {
            "id": 108,
            "name": "Sheamus"
        },
        {
            "id": 109,
            "name": "Simon Gotch"
        },
        {
            "id": 110,
            "name": "Sin Cara"
        },
        {
            "id": 111,
            "name": "Stardust"
        },
        {
            "id": 112,
            "name": "Stephanie McMahon"
        },
        {
            "id": 113,
            "name": "Sting"
        },
        {
            "id": 114,
            "name": "Stone Cold Steve Austin"
        },
        {
            "id": 115,
            "name": "Summer Rae"
        },
        {
            "id": 116,
            "name": "Tamina"
        },
        {
            "id": 117,
            "name": "Titus O'Neil"
        },
        {
            "id": 118,
            "name": "Triple H"
        },
        {
            "id": 119,
            "name": "Tyler Breeze"
        },
        {
            "id": 120,
            "name": "Tyson Kidd"
        },
        {
            "id": 121,
            "name": "Ultimate Warrior"
        },
        {
            "id": 122,
            "name": "Undertaker"
        },
        {
            "id": 123,
            "name": "Vader"
        },
        {
            "id": 124,
            "name": "Viktor"
        },
        {
            "id": 125,
            "name": "X-Pac"
        },
        {
            "id": 126,
            "name": "Xavier Woods"
        },
        {
            "id": 127,
            "name": "Zack Ryder"
        }
    ],
    matchTypes: {
        "1v1": {
            "normal": {text: "Normal"},
            "falls-count-anywhere": {text: "Falls Count Anywhere"},
            "iron-man": {text: "Iron Man"},
            "submission": {text: "Submission"},
            "extreme-rules": {text: "Extreme Rules"},
            "table": {text: "Table"},
            "no-holds-barred": {text: "No Holds Barred"},
            "last-man-standing": {text: "Last Man Standing"},
            "ladder": {text: "Ladder"},
            "tlc": {text: "TLC"},
            "steel-cage": {text: "Steel Cage"},
            "hell-in-a-cell": {text: "Hell in a Cell"}
        },
        "2v2": {
            "normal": {text: "Normal", teams: true},
            "extreme-rules": {text: "Extreme Rules", teams: true},
            "steel-cage": {text: "Steel Cage", teams: true},
            "elimination-tag": {text: "Elimination Tag", teams: true},
            "elimination-tornado-tag": {text: "Elimination Tornado Tag", teams: true},
            "hell-in-a-cell": {text: "Hell in a Cell", teams: true}
        },
        "triple": {
            "normal": {text: "Normal"},
            "extreme-rules": {text: "Extreme Rules"},
            "steel-cage": {text: "Steel Cage"},
            "hell-in-a-cell": {text: "Hell in a Cell"},
            "ladder": {text: "Ladder"},
            "table": {text: "Table"},
            "tlc": {text: "TLC"}
        },
        "four-way": {
            "fatal-4-way": {text: "Fatal 4-Way"},
            "fatal-4-way-extreme-rules": {text: "Fatal 4-Way Extreme Rules"},
            "hell-in-a-cell": {text: "Hell in a Cell"},
            "falls-count-anywhere": {text: "Falls Count Anywhere"},
            "ladder": {text: "Ladder"},
            "table": {text: "Table"},
            "tlc": {text: "TLC"}
        },
        "six-man": {
            "tag-team": {text: "Tag Team", teams: true},
            "elimination-tag": {text: "Elimination Tag", teams: true},
            "battle-royal": {text: "Battle Royal"},
            "elimination-chamber": {text: "Elimination Chamber"},
            "elimination-chamber-tag-team": {text: "Elimination Chamber (Tag-Team)", teams: true},
            "hell-in-a-cell": {text: "Hell in a Cell"},
            "ladder": {text: "Ladder"}
        },
        "handicap": {
            "one-on-two": {text: "One on Two", teams: true, teamSizes: [1, 2]},
            "one-on-three": {text: "One on Three", teams: true, teamSizes: [1, 3]}
        },
        "tournament": {
            "gold-rush": {text: "Gold Rush"},
            "king-of-the-ring": {text: "King of the Ring"},
            "tag-team": {text: "Tag Team", teams: true}
        },
        "royal-rumble": {
            "10-man": {text: "10-Man"},
            "20-man": {text: "20-Man"},
            "30-man": {text: "30-Man"}
        }
    }
};