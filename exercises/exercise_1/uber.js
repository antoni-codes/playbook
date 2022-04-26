const profile = {
    name: 'Emmanuel Hernández',
    img_profile: 'profile-img.png',
    calification: 4.78,
    shortcut: [
        { short_icon: 'short-icon-1.png', title: 'Help' },
        { short_icon: 'short-icon-2.png', title: 'Payment' },
        { short_icon: 'short-icon-3.png', title: 'Trips' },
    ],
    
    memberStatus: () => {
        if(actualMember === false) {
            const messageMember = "Join free for 1 month"
        }
    }
}