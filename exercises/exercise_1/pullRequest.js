const pullRequest = {
    title: 'Issue Solution',
    author: 'Antonicodes',
    branchName: 'main',
    dateCreated: "2022-04-25/19:42:25",
    status: 'Uploaded',
    repositoryNameAssociated: 'Launch X',


    getStatus() {
        return this.status
    },

    getTitleAndAuthor(){
        return `PR: ${this.title} from ${this.author}`
    }

}

console.log(pullRequest.getTitleAndAuthor())
console.log(`The PR Status is ${pullRequest.getStatus()}`)