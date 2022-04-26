class PullRequest {
    constructor() {
        this.title = 'Issue Solution'
        this.author = 'Antonicodes'
        this.branchName = 'main'
        this.dateCreated = "2022-04-25/19:42:25"
        this.status = 'Uploaded'
        this.repositoryNameAssociated = 'Launch X'
    }


    getStatus() {
        return this.status
    }

    getTitleAndAuthor() {
        return `PR: ${this.title} from ${this.author}`
    }

}

const pullInfo = new PullRequest()
console.log(pullInfo.getTitleAndAuthor())
console.log(`The PR Status is ${pullInfo.getStatus()}`)