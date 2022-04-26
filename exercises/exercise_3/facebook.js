class User {
    constructor() {
        this.user = 'Emmanuel'
        this.profile_img = 'profile_img.jpg'
        this.username = 'antonicodes'
        this.bio = "Hi! I am Emmanuel i'm a programmer"
        this.location = 'Mexico'
        this.link = "jeemdev.com"
        this.birth_date = "12 de Diciembre de 1996"
        this.followers = 150
        this.friends = 250
    }
}

class Post {
    constructor() {
        this.profile_img = 'profile_img.jpg'
        this.text = ""
        this.action_1 = "Live Video"
        this.action_2 = "Photo/Video"
        this.action_3 = "Important Moments"
    }
}

class Biography {
    constructor() {
        this.profile_img = 'profile_img.jpg'
        this.user_name = 'Emmanuel Hernández'
        this.friends = 250
        this.bio = "Hi! I am Emmanuel i'm a programmer"
        this.followers = 150
        this.location = 'Mexico'
        this.link = "jeemdev.com"
        this.birth_date = "12 de Diciembre de 1996"
        this.joined_date = "Joined in November 2013"
        this.social_media = [
            { icon: 'insta-icon.png', user_name: 'antonicodes' },
            { icon: 'twitter-icon.png', user_name: 'antoni-codes' },
            { icon: 'github-icon.png', user_name: 'antonicodes' },
            { icon: 'linkedin-icon.png', user_name: 'antonicodess' }
        ]
    }

}


const myPost = new Post()
console.log(myPost.profile_img);