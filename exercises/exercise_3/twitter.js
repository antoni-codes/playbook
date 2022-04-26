class User {
    constructor(){
        this.user = 'Emmanuel'
        this.username = 'antonicodes'
        this.bio = "Hi! I am Emmanuel i'm a programmer"
        this.location = 'Mexico'
        this.link = "jeemdev.com"
        this.birth_date = "12 de Diciembre de 1996"
        this.joined_date = "Joined in November 2013"
        this.age = 25
        this.following = 11
        this.followers = 23
    }
}

class trending_topic {
    constructor() {
        this.location = 'Trending in Mexico'
        this.promotion = {
            hastag: "#HONORX8",
            description: 'Elegant and extraordinaire',
            promotionBy: 'Promotion by Honor Mexico'
        }
        this.trendings = [
            { id: 1, categorie: 'Policy', hashtag: 'Elon Musk', numTweets: 1.71 },
            { id: 2, categorie: 'Business & Finance', hashtag: 'Twitter', numTweets: 170.00 },
            { id: 3, categorie: 'NBA', hashtag: 'Nets', numTweets: 60.7 },
            { id: 4, categorie: 'Music', hashtag: 'Drake', numTweets: 7.239 },
            { id: 5, categorie: 'Trending', hashtag: 'Tesla', numTweets: 59.3 },
        ]
    }
}

class hashtag {
    constructor() {
        this.description = ""
        this.visibility = 'anyone can answer'
        this.actions = ["icon-1.png", "icon-2.png", "icon-3.png", "icon-4.png", "icon-5.png", "icon-6.png"]
    }
}