class profile {
    constructor() {
        this.name = 'Emmanuel Hernández'
        this.img_profile = 'profile-img.png'
        this.calification = 4.78
        this.shortcut = [
            { short_icon: 'short-icon-1.png', title: 'Help' },
            { short_icon: 'short-icon-2.png', title: 'Payment' },
            { short_icon: 'short-icon-3.png', title: 'Trips' },
        ]
        this.memberStatus = () => {
            if(actualMember === false) {
                const messageMember = "Join free for 1 month"
                console.log(messageMember)
            }
        }
    } 
}