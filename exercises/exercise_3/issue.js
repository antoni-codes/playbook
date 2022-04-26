
class Issue {
    constructor() {
        this.author = "Antonicodes"
        this.title = 'Client Form Issue'
        this.repositoryNameAssociated = 'Launch X'
        this.status = 'Waiting'
        this.numberOfComments = 3
        this.labels = 'form'
        this.author = "Antonicodes"
        this.dateCreated = "2022-04-25/19:42:25"
        this.lastUpdate = new Date()
    }

    getTitleAndAuthor() {
        return this.title + " by " + this.author
    }

    getGeneralInfo() {
        return `The issue from ${this.repositoryNameAssociated} created at ${this.dateCreated}, has ${this.numberOfComments} comments`
    }

}

const issueInfo = new Issue()
console.log(`Issue Information: ${issueInfo.getTitleAndAuthor()}`);
console.log(issueInfo.getGeneralInfo())
console.log("Last Update: " + issueInfo.lastUpdate)
